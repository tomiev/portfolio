import React from "react"
import {
  createRef,
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type tagSphereProps = {
  texts: (string | ReactNode)[];
  radius?: number;
  maxSpeed: number;
  initialSpeed: number;
  initialDirection: 135;
  keepRollingAfterMouseOut: boolean;
  className?: string;
  style?: CSSProperties;
  useContainerInlineStyles: boolean;
  fullWidth: boolean;
  fullHeight: boolean;
};

const defaultStyles = {
  getContainer: (radius: number, fullWidth: boolean, fullHeight: boolean) =>
    ({
      position: "relative",
      width: fullWidth ? "100%" : `${2 * radius}px`,
      maxWidth: "100%",
      minHeight: `${2 * radius}px`,
      height: fullHeight ? "100%" : `${2 * radius}px`,
      touchAction: "none",
    } as CSSProperties),
};

const computeInitialPosition = (
  index: number,
  textsLength: number,
  size: number
) => {
  const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
  const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
  return {
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2,
  };
};

const updateItemPosition = (item: any, sc: number[], depth: number) => {
  const newItem = { ...item, scale: "" };
  const rx1 = item.x;
  const ry1 = item.y * sc[1] + item.z * -sc[0];
  const rz1 = item.y * sc[0] + item.z * sc[1];

  const rx2 = rx1 * sc[3] + rz1 * sc[2];
  const ry2 = ry1;
  const rz2 = rz1 * sc[3] - rx1 * sc[2];

  const per = (2 * depth) / (2 * depth + rz2);
  newItem.x = rx2;
  newItem.y = ry2;
  newItem.z = rz2;

  if (newItem.x === item.x && newItem.y === item.y && newItem.z === item.z) {
    return item;
  }

  newItem.scale = per.toFixed(3);
  let alpha: number = per * per - 0.25;
  alpha = parseFloat((alpha > 1 ? 1 : alpha).toFixed(3));

  const itemEl = newItem.ref.current;

  const left = (newItem.x - itemEl.offsetWidth / 2).toFixed(2);

  const top = (newItem.y - itemEl.offsetHeight / 2).toFixed(2);
  const transform = `translate3d(${left}px, ${top}px, 0) scale(${newItem.scale})`;


  itemEl.style.WebkitTransform = transform;

  itemEl.style.MozTransform = transform;

  itemEl.style.OTransform = transform;

  itemEl.style.transform = transform;

  itemEl.style.filter = `grayscale(${(alpha - 1) * -8}) blur(${
    (alpha - 1) * -5 > 1 ? Math.floor((alpha - 1) * -8) : 0
  }px)`;
  itemEl.style.zIndex = Math.floor(alpha * 1000);

  itemEl.style.opacity = alpha;

  return newItem;
};

const createItem = (
  text: string | ReactNode,
  index: number,
  textsLength: number,
  size: number,
  itemRef: any
) => {
  const transformOrigin = "50% 50%";
  const transform = "translate3d(-50%, -50%, 0) scale(1)";
  const itemStyles = {
    willChange: "transform, opacity, filter",
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: index + 1,
    filter: "alpha(opacity=0)",
    opacity: 0,
    WebkitTransformOrigin: transformOrigin,
    MozTransformOrigin: transformOrigin,
    OTransformOrigin: transformOrigin,
    transformOrigin: transformOrigin,
    WebkitTransform: transform,
    MozTransform: transform,
    OTransform: transform,
    transform: transform,
  } as CSSProperties;

  const itemEl = (
    <span ref={itemRef} key={index} style={itemStyles}>
      {text}
    </span>
  );

  return {
    ref: itemRef,
    el: itemEl,
    ...computeInitialPosition(index, textsLength, size),
  };
};

const defaultState: tagSphereProps = {
  texts: [
    <img
      src="https://cdn.svgporn.com/logos/css-3.svg"
      alt="CSS3"
      width={40}
    />,
    <img src="https://cdn.svgporn.com/logos/dotnet.svg"
     alt=".NET"
     width={40}
    />,
    <img src="https://cdn.svgporn.com/logos/c-sharp.svg"
     alt="C#"
     width={40}
    />,
    <img
      src="https://cdn.svgporn.com/logos/figma.svg"
      alt="Figma"
      width={40}
    />,
    <img
      src="https://cdn.svgporn.com/logos/html-5.svg"
      alt="HTML"
      width={40}
    />,
    <img src="https://cdn.svgporn.com/logos/sass.svg"
      alt="SASS"
      width={50}
    />,
    <img
      width={40}
      src={"https://cdn.svgporn.com/logos/react.svg"}
      alt={"React"}
    />,
    <img
      src="https://cdn.svgporn.com/logos/bootstrap.svg"
      alt="Bootstrap"
      width={40}
    />,
    <img
      src="https://cdn.svgporn.com/logos/github-icon.svg"
      alt="GitHub"
      width={60}
      color='white'
    />,
    <img
      src="https://cdn.svgporn.com/logos/git-icon.svg"
      alt="Git"
      width={40}
    />,
    <img
      src="https://cdn.svgporn.com/logos/gatsby.svg"
      alt="Gatsby"
      width={40}
    />,
    <img
      src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg"
      alt="Tailwind CSS"
      width={60}
    />,
    <img
      src="https://cdn.svgporn.com/logos/postgresql.svg"
      alt="PostgreSQL"
      width={60}
    />,
    <img
      src="https://cdn.svgporn.com/logos/javascript.svg"
      alt="JavaScript"
      width={40}
    />,
  ],
  maxSpeed: 15,
  initialSpeed: 6,
  initialDirection: 135,
  keepRollingAfterMouseOut: true,
  useContainerInlineStyles: true,
  fullWidth: false,
  fullHeight: false,
};

export default function SkillSphere(props: any) {
  const {
    maxSpeed,
    initialSpeed,
    texts,
    initialDirection,
    keepRollingAfterMouseOut,
    fullHeight,
    fullWidth,
    style,
    useContainerInlineStyles,
  }: tagSphereProps = { ...defaultState, ...props };

  let radius = props.radius;

  if (!radius) {
    radius = texts.length * 15;
  }

  const depth = 2 * radius;
  const size = 1.5 * radius;
  const itemHooks = texts.map(() => createRef());
  const [items, setItems]: [any[], any] = useState([]);

  useEffect(() => {
    setItems(() =>
      texts.map((text, index) =>
        createItem(text, index, texts.length, size, itemHooks[index])
      )
    );
  }, [texts]);

  const containerRef = useRef(null);
  const [firstRender, setFirstRender] = useState(true);
  const [lessSpeed, setLessSpeed] = useState(maxSpeed);
  const [active, setActive] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: any) => {

    const rect = containerRef.current.getBoundingClientRect();

    setMouseX(() => (e.clientX - (rect.left + rect.width / 2)) / 5);
    setMouseY(() => (e.clientY - (rect.top + rect.height / 2)) / 5);
  };

  const checkTouchCoordinates = (e: any) => {

    const rect = containerRef.current.getBoundingClientRect();
    const touchX = e.targetTouches[0].clientX;
    const touchY = e.targetTouches[0].clientY;

    if (
      touchX > rect.left &&
      touchX < rect.right &&
      touchY < rect.bottom &&
      touchY > rect.top
    ) {
      return true;
    }

    return false;
  };

  const next = () => {
    setItems((items: any) => {
      if (lessSpeed === 0) return items;

      let a, b;
      if (!keepRollingAfterMouseOut && !active && !firstRender) {
        setLessSpeed((lessSpeedCurrent) => {
          const lessConstant = lessSpeed * (maxSpeed / 200);

          return lessSpeedCurrent - lessConstant > 0.01
            ? lessSpeedCurrent - lessConstant
            : 0;
        });

        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * lessSpeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * lessSpeed;


      } else if (!active && !firstRender && keepRollingAfterMouseOut) {
        a =
          -(Math.min(Math.max(-mouseY, -size), size) / radius) *
          (maxSpeed * 0.5);
        b =
          (Math.min(Math.max(-mouseX, -size), size) / radius) *
          (maxSpeed * 0.5);
      } else {
        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * maxSpeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * maxSpeed;
      }

      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return items; // pause

      // calculate offset
      const l = Math.PI / 180;
      const sc = [
        Math.sin(a * l),
        Math.cos(a * l),
        Math.sin(b * l),
        Math.cos(b * l),
      ];

      return items.map((item: any) => updateItemPosition(item, sc, depth));
    });
  };

  const init = () => {
    setActive(false);
    const mouseX0 = initialSpeed * Math.sin(initialDirection * (Math.PI / 180));
    const mouseY0 =
      -initialSpeed * Math.cos(initialDirection * (Math.PI / 180));

    setMouseX(() => mouseX0);
    setMouseY(() => mouseY0);

    next();
  };

  useEffect(() => {
    init();
    setItems((items: any) => [...items]);
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(next);
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY, lessSpeed, active, items, props.radius]);

  return (
    <div
      className={props.className}
      ref={containerRef}
      onMouseOver={() => {
        setActive(() => true);
        setFirstRender(() => false);
        setLessSpeed(() => maxSpeed);
      }}
      onMouseOut={() => {
        setActive(() => false);
      }}
      onMouseMove={handleMouseMove}
      onTouchStart={() => {
        setActive(true);
        setLessSpeed(() => maxSpeed);
        setFirstRender(() => false);
      }}
      style={
        useContainerInlineStyles
          ? style || defaultStyles.getContainer(radius, fullWidth, fullHeight)
          : undefined
      }
    >
      {items.map((item) => item.el)}
    </div>
  );
}
