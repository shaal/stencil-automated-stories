import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { argTypeSlotContent } from '../../utils/utils';

import { AllowedHeadingLevels, HeadingSizes, HeadingStyles } from './config';

const levelOptions: AllowedHeadingLevels[] = [1, 2, 3, 4, 5, 6];

export default {
  title: 'Atoms/Heading',
  component: 'outline-heading',
  argTypes: {
    ...argTypeSlotContent,
    level: {
      control: {
        type: 'select',
        options: levelOptions,
      },
    },
    levelSize: {
      control: {
        type: 'select',
        options: HeadingSizes,
      },
    },
    levelStyle: {
      control: {
        type: 'select',
        options: HeadingStyles,
      },
    },
    sub: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    defaultSlot:
      'Sample heading text that should take up multiple lines so we can test for proper size and leading.',
  },
};

const Template = ({ level, levelSize, levelStyle, sub, defaultSlot }) =>
  html`
    <outline-container>
      <outline-heading
        level="${ifDefined(level)}"
        level-size="${ifDefined(levelSize)}"
        level-style="${ifDefined(levelStyle)}"
        sub="${ifDefined(sub)}"
      >
        ${defaultSlot}
      </outline-heading>
    </outline-container>
  `;

export const Heading = Template.bind({});
Heading.args = {
  level: 1,
  levelSize: '3xl',
  levelStyle: 'semibold',
};

export const DefaultHeading = Template.bind({});
DefaultHeading.args = {};

export const ThinHeading = Template.bind({});
ThinHeading.args = {
  level: 2,
  levelSize: '3xl',
  levelStyle: 'thin',
};
