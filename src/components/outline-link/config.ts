export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export interface LinkType {
  target?: LinkTarget;
  text: string;
  url: string;
}

export const argTypeTarget = {
  target: {
    name: 'Link Target',
    control: {
      type: 'select',
      options: ['_blank', '_self', '_parent', '_top'],
    },
  },
};
