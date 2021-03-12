import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import sampleImage from '../../../.storybook/static/media/color/Creative_Process_color.jpg';
import { argTypeHidden } from '../../utils/utils';

export default {
  title: 'Atoms/Image',
  component: 'outline-image',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    imageUrl: argTypeHidden,
    parallaxContainer: argTypeHidden,
    el: argTypeHidden,
  },
  args: {
    imageUrl: sampleImage,
    caption: '',
  },
};

const Template = ({ imageUrl, caption, parallax }) => html`
  <outline-image parallax="${ifDefined(parallax)}">
    <img slot="multimedia" src="${imageUrl}" alt="Random Image" />
    <outline-container slot="caption">${caption}</outline-container>
  </outline-image>
`;

export const StaticImage = Template.bind({});

export const ParallaxImage = Template.bind({});
ParallaxImage.args = {
  parallax: true,
};

ParallaxImage.decorators = [
  Story => html`
    <outline-container class="mt-64">
      <outline-heading level="2" level-style="2xl" class="my-6">
        Scroll to see parallax in action
      </outline-heading>
    </outline-container>
    <div style="margin: 20em 0;">${Story()}</div>
    <outline-container class="mb-64">
      <outline-heading level-style="3xl" class="my-6">
        Scroll to see parallax in action
      </outline-heading>
    </outline-container>
  `,
];
