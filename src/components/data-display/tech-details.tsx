'use client';

// import { TechDetails } from '@/lib/types';
import type { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex h-12 w-12 flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="h-10 w-10 transition-transform duration-300 md:hover:scale-110"
        />
      </Link>
      <Typography className="whitespace-nowrap text-center text-base">{label}</Typography>
    </div>
  );
};

export default TechDetails;
