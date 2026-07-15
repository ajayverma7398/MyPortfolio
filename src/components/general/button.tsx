'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { mergeClasses } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={mergeClasses(
          'inline-flex items-center justify-center rounded-xl bg-amber-600 px-4 py-1.5 font-medium text-white transition-colors duration-200 hover:bg-amber-700 active:bg-amber-800',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
