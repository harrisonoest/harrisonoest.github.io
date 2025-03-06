import { Box, Image, ImageProps } from '@mantine/core';
import yetiLogoImage from '../assets/yeti_150x150.webp';

interface YetiLogoProps extends Omit<ImageProps, 'src'> {
  size?: number;
  withLink?: boolean;
  alt?: string;
  borderRadius?: number | string;
}

export function YetiLogo({
  size = 150,
  alt = 'Yeti Logo',
  borderRadius = '8px',
  style,
  ...others
}: YetiLogoProps) {
  const logoComponent = (
    <Image
      src={yetiLogoImage}
      alt={alt}
      width={size}
      height={size}
      style={{
        borderRadius,
        ...style
      }}
      {...others}
    />
  );

  return (
    <Box component="a" href="/" style={{ display: 'inline-block' }}>
      {logoComponent}
    </Box>
  );

}
