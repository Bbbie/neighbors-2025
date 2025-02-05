export const PRESETS: {
   name: string
   modifiers: string
   value?: any
}[] = [
   {
      name: 'endless-rotate',
      modifiers: 'infinitely.to',
      value: { rotate: '90deg', ease: 'linear' },
   },
   {
      name: 'hover-up',
      modifiers: 'whileHover.to',
      value: { rotate: '10deg', scale: 1.1 },
   },
]
