import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeader({ title }) {
  return (
    <div className="flex justify-center gap-2 items-center mb-4 md:mb-6">
      <motion.div
        className='line'
        initial={{ width: "0%" }}
        whileInView={{ width: "50%" }}
        viewport={{ once: true, amount: "all" }}
        transition={{ delay: 0.7, duration: 1 }}>
      </motion.div>
      <motion.h2
        className='font-semibold text-3xl text-center'
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "all" }}
        transition={{ duration: 0.5 }}>
        {title}
      </motion.h2>
      <motion.div
        className="line"
        initial={{ width: "0%" }}
        whileInView={{ width: "50%" }}
        viewport={{ once: true, amount: "all" }}
        transition={{ delay: 0.7, duration: 1 }}>
      </motion.div>
    </div>
  )
}
