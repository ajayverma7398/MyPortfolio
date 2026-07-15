import * as React from 'react';

import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  colorIndex?: number;
}

const TAG_COLORS = [
  'bg-amber-100 dark:bg-amber-500/10 [&_p]:text-amber-800 dark:[&_p]:text-amber-400',
  'bg-rose-100 dark:bg-rose-500/10 [&_p]:text-rose-800 dark:[&_p]:text-rose-400',
  'bg-emerald-100 dark:bg-emerald-500/10 [&_p]:text-emerald-800 dark:[&_p]:text-emerald-400',
  'bg-sky-100 dark:bg-sky-500/10 [&_p]:text-sky-800 dark:[&_p]:text-sky-400',
  'bg-violet-100 dark:bg-violet-500/10 [&_p]:text-violet-800 dark:[&_p]:text-violet-400',
  'bg-fuchsia-100 dark:bg-fuchsia-500/10 [&_p]:text-fuchsia-800 dark:[&_p]:text-fuchsia-400',
  'bg-lime-100 dark:bg-lime-500/10 [&_p]:text-lime-800 dark:[&_p]:text-lime-400',
  'bg-cyan-100 dark:bg-cyan-500/10 [&_p]:text-cyan-800 dark:[&_p]:text-cyan-400',
];

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, colorIndex, ...props }: TagProps, ref) => {
    const colorClasses =
      colorIndex !== undefined
        ? TAG_COLORS[colorIndex % TAG_COLORS.length]
        : 'bg-amber-100 dark:bg-amber-500/10 [&_p]:text-amber-800 dark:[&_p]:text-amber-400';

    return (
      <div
        className={mergeClasses(
          'flex items-center justify-center rounded-xl px-5 py-1',
          colorClasses,
          className
        )}
        {...props}
      >
        <Typography variant="body3" className="font-medium">
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
