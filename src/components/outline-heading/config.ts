import tailwindConfig from '../../resolved-tailwind-config';

export type AllowedHeadingLevels = 1 | 2 | 3 | 4 | 5 | 6 | undefined;

// export type HeadingStyle =
//   | 'heading1'
//   | 'heading2'
//   | 'heading3'
//   | 'heading4'
//   | 'heading5'
//   | 'heading6';

export type AllowedHeadingSizes = keyof typeof tailwindConfig.fontSize;
export const HeadingSizes = Object.keys(tailwindConfig.fontSize);

export type AllowedHeadingStyles = keyof typeof tailwindConfig.fontWeight;
export const HeadingStyles = Object.keys(tailwindConfig.fontWeight);
