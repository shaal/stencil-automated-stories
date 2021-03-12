import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { AllIcons } from '../outline-icon/config';
import { argTypeSlotContent } from '../../utils/utils';
import { argTypeTarget } from '../outline-link/config';
import { StatVariant } from './outline-stat';

const statOptions: StatVariant[] = [
  'none',
  'primary',
  'secondary',
  'tertiary',
];

export default {
  title: 'Molecules/Stat',
  component: 'outline-stat',
  argTypes: {
    ...argTypeSlotContent,
    ...argTypeTarget,
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    url: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: statOptions,
      },
    },
    icon: {
      control: {
        type: 'select',
        options: AllIcons,
      },
    },
  },
  args: {
    variant: 'primary',
  },
};

const Template = ({ defaultSlot, disabled, url, target, variant, icon }) =>
  html`
    <outline-stat
      url="${ifDefined(url)}"
      target="${ifDefined(target)}"
      variant="${ifDefined(variant)}"
      disabled="${ifDefined(disabled)}"
      icon="${ifDefined(icon)}"
    >
      ${defaultSlot}
    </outline-stat>
  `;

export const Link = Template.bind({});
Link.args = {
  defaultSlot: 'Link stat',
  url: '#',
};

export const IconLink = Template.bind({});
IconLink.args = {
  defaultSlot: 'Link stat w/icon',
  url: '#',
  variant: 'primary',
};

export const PrimaryStat = Template.bind({});
PrimaryStat.args = {
  defaultSlot: 'Primary stat',
  variant: 'primary',
};

export const SecondaryStat = Template.bind({});
SecondaryStat.args = {
  defaultSlot: 'Secondary stat',
  variant: 'secondary',
};

export const TertiaryStat = Template.bind({});
TertiaryStat.args = {
  defaultSlot: 'Tertiary stat',
  variant: 'tertiary',
};
