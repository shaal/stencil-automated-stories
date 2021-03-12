import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import {
  IconTypeSolid,
  IconTypeOutline,
  IconVariant,
  IconTypeCustom,
  IconList,
} from './config';

import { argTypeColor } from '../../utils/utils';

export default {
  title: 'Atoms/Icon',
  component: 'outline-icon',
  argTypes: {
    color: argTypeColor,
    icon: {
      control: {
        type: 'select',
        options: IconList,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: IconVariant,
      },
    },
    url: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ icon, url, color }) =>
  html`
    <outline-icon
      class="w-24"
      icon="${ifDefined(icon)}"
      url="${ifDefined(url)}"
      color="${ifDefined(color)}"
    ></outline-icon>
  `;

export const SelectIcon = Template.bind({});
SelectIcon.args = {
  icon: IconTypeSolid.ADJUSTMENTS_SOLID,
};

export const AllCustomIcons = () => html`
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4"
  >
    ${Object.values(IconTypeCustom).map(
      icon =>
        html`
          <div class="text-center">
            <outline-icon class="w-24" icon="${ifDefined(icon)}"></outline-icon>
            <div class="text-xs">${icon}</div>
          </div>
        `
    )}
  </div>
`;

export const AllOutlineIcons = () => html`
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4"
  >
    ${Object.values(IconTypeOutline).map(
      icon =>
        html`
          <div class="text-center">
            <outline-icon class="w-24" icon="${ifDefined(icon)}"></outline-icon>
            <div class="text-xs">${icon}</div>
          </div>
        `
    )}
  </div>
`;

export const AllSolidIcons = () => html`
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4"
  >
    ${Object.values(IconTypeSolid).map(
      icon =>
        html`
          <div class="text-center">
            <outline-icon class="w-24" icon="${ifDefined(icon)}"></outline-icon>
            <div class="text-xs">${icon}</div>
          </div>
        `
    )}
  </div>
`;
