import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-ink-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="font-mono text-2xl font-semibold text-white"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          >
            <span className="text-primary-400">&lt;</span>GC
            <span className="text-primary-400">/&gt;</span>
          </motion.div>
          <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-primary-500"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <p className="font-mono text-xs tracking-widest text-slate-500">
            COMPILING PORTFOLIO...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
