import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

import { argTypeSlotContent, argTypeHorizontalAlign } from '../../utils/utils';

export default {
  title: 'Templates/Container',
  component: 'outline-container',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...argTypeSlotContent,
    align: {
      ...argTypeHorizontalAlign,
      name: 'Alignment of the Container',
      defaultValue: 'center',
    },
    isNested: {
      name: 'Nested Container',
      control: {
        type: 'boolean',
      },
    },
    fullBleed: {
      name: 'Full Bleed Container',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Container = ({ isNested, fullBleed, align }) =>
  html`
    <outline-container
      class="text-left rounded-xl border-2 border-dashed bg-neutral-lightGray border-brand-blue py-10 md:py-20 my-10 md:my-20"
      is-nested="${ifDefined(isNested)}"
      full-bleed="${ifDefined(fullBleed)}"
      align="${ifDefined(align)}"
    >
      <outline-heading level="2" level-size="2xl" class="mb-4"
        >Container</outline-heading
      >
      <p>
        This is text inside of a container. The various stylings of the element
        in demo mode are just here to show where the container starts and ends
        and will not be visible on the actual component being rendered.
      </p>
      <p>
        The left and right padding are in fact representative of the final
        display.
      </p>
    </outline-container>
  `;
