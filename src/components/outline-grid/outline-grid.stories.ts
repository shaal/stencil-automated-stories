import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

import { argTypeSlotContent, argTypeGapSize } from '../../utils/utils';

export default {
  title: 'Templates/Grid',
  component: 'outline-grid',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...argTypeSlotContent,
    gapSize: {
      ...argTypeGapSize,
      name: 'Default Gap Size',
    },
    gapSizeSm: {
      ...argTypeGapSize,
      name: 'Gap Size on Small+',
    },
    gapSizeMd: {
      ...argTypeGapSize,
      name: 'Gap Size on Medium+',
    },
    gapSizeLg: {
      ...argTypeGapSize,
      name: 'Gap Size on Large+',
    },
    gapSizeXl: {
      ...argTypeGapSize,
      name: 'Gap Size on Extra Large+',
    },
    gapSizeXxl: {
      ...argTypeGapSize,
      name: 'Gap Size on Extra Extra Large+',
    },
    isNested: {
      name: 'Nested Grid',
      control: {
        type: 'boolean',
      },
    },
    fullBleed: {
      name: 'Full Bleed Grid',
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({
  gapSize,
  gapSizeSm,
  gapSizeMd,
  gapSizeLg,
  gapSizeXl,
  gapSizeXxl,
  isNested,
  fullBleed,
  defaultSlot,
}) => html`
  <outline-grid
    gap-size="${ifDefined(gapSize)}"
    gap-size-sm="${ifDefined(gapSizeSm)}"
    gap-size-md="${ifDefined(gapSizeMd)}"
    gap-size-lg="${ifDefined(gapSizeLg)}"
    gap-size-xl="${ifDefined(gapSizeXl)}"
    gap-size-xxl="${ifDefined(gapSizeXxl)}"
    is-nested="${ifDefined(isNested)}"
    full-bleed="${ifDefined(fullBleed)}"
  >
    ${defaultSlot}
  </outline-grid>
`;

export const RowsAndColumns = Template.bind({});
RowsAndColumns.args = {
  gapSize: 'small',
  defaultSlot: html`
    <outline-column col-span-default="12" content-align="middle" class="pb-6">
      <outline-heading level="2" level-size="3xl" level-style="extralight"
        >Column/Row Spanning</outline-heading
      >
    </outline-column>

    <outline-column
      col-span-default="12"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This box spans 1 row and 12 columns.</p>
    </outline-column>
    <outline-column
      col-span-md="6"
      row-span="4"
      class="py-64 border-2 border-brand-blue bg-neutral-lightGray p-8 border-dashed rounded-xl shadow-md"
    >
      <p>This box spans 4 rows and 6 columns.</p>
    </outline-column>
    <outline-column
      col-span-md="6"
      row-span="1"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 border-dashed rounded-xl shadow-md"
    >
      <p>This box spans 6 columns and 1 row.</p>
    </outline-column>
    <outline-column
      col-span-md="6"
      row-span="3"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 border-dashed rounded-xl shadow-md"
    >
      <p>This box spans 6 columns and 3 rows.</p>
    </outline-column>
    <outline-column
      col-span-default="12"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This box spans 1 row and 12 columns.</p>
    </outline-column>
  `,
};

export const EqualColumns = Template.bind({});
EqualColumns.args = {
  gapSize: 'small',
  defaultSlot: html`
    <outline-column col-span-default="12" class="pb-6">
      <outline-heading level="2" level-size="3xl" level-style="extralight"
        >Equal Column Grid</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
  `,
};

export const FullBleed = Template.bind({});
FullBleed.args = {
  gapSize: 'small',
  fullBleed: true,
  defaultSlot: html`
    <outline-column col-span-default="12" class="pb-6">
      <outline-heading level="2" level-size="3xl" level-style="extralight"
        >Equal Column Grid</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
  `,
};

export const AsymmetricLeft = Template.bind({});
AsymmetricLeft.args = {
  gapSize: 'small',
  defaultSlot: html`
    <outline-column col-span-default="12" class="pb-6">
      <outline-heading level="2" level-size="3xl" level-style="extralight"
        >Asymmetrical Grid</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-md="8"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </outline-column>
  `,
};

export const AsymmetricRight = Template.bind({});
AsymmetricRight.args = {
  gapSize: 'small',
  defaultSlot: html`
    <outline-column col-span-default="12" class="pb-6">
      <outline-heading level="2" level-size="3xl" level-style="extralight"
        >Asymmetrical Grid</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </outline-column>
    <outline-column
      col-span-md="8"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </outline-column>
  `,
};

export const OffsetLeft = Template.bind({});
OffsetLeft.args = {
  defaultSlot: html`
    <outline-column col-span-default="12" class="pb-6">
      <outline-heading level="2" level-size="3xl" level-style="extralight"
        >Offset Left</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-default="10"
      class="border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is an example of a grid column layout in which the content doesn't
        expand the whole width of the container.
      </p>
    </outline-column>
  `,
};

export const OffsetRight = Template.bind({});
OffsetRight.args = {
  defaultSlot: html`
    <outline-column col-span-default="12" class="pb-6">
      <outline-heading level="2" level-size="3xl" level-style="extralight"
        >Offset Right</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-default="10"
      class="col-start-3 justify-self-end border-2 border-brand-blue bg-neutral-lightGray p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is an example of a grid column layout in which the content doesn't
        expand the whole width of the container.
      </p>
    </outline-column>
  `,
};
