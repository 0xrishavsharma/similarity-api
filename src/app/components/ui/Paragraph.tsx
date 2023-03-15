import { FC, forwardRef, HTMLAttributes } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const paragraphVariants = cva(
  'max-v-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg ',
        sm: 'text-sm sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

// eslint-disable-next-line react/display-name
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }) => {
    return (
      <p className={paragraphVariants()}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        voluptatibus, quod, quas, voluptatum quia quia voluptate, doloribus
        assumenda quibusdam quos doloremque. Quisquam, quibusdam. Quibusdam
        voluptatum voluptates voluptas, quod quia voluptatibus.
      </p>
    )
  }
)

export default Paragraph
