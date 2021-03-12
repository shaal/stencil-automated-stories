import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import sampleImage1 from '../../../.storybook/static/media/color/Codeworkbench_color.jpg';
import sampleImage2 from '../../../.storybook/static/media/color/Colored_paper_color.jpg';
import sampleImage3 from '../../../.storybook/static/media/color/Creative_Process_color.jpg';
import sampleImage4 from '../../../.storybook/static/media/color/Flowers_color.jpg';
import sampleImage5 from '../../../.storybook/static/media/color/Laptop_4_color.jpg';
import { argTypeHidden } from '../../utils/utils';

export default {
  title: 'Organisms/Slider',
  component: 'outline-slider',
  argTypes: {
    el: {
      table: {
        disable: true,
      },
    },
    initialized: {
      table: {
        disable: true,
      },
    },
    bodyContent: argTypeHidden,
    slidesToDisplay: {
      name: 'Number of Slides',
      description:
        'Number of slides to display (e.g. use 1.5 to display one and a half slides)',
      control: {
        type: 'range',
        min: 1,
        max: 3,
        step: 0.25,
      },
    },
    displayArrows: {
      name: 'Display Navigation Arrows',
      description: 'Whether to display navigation arrows to switch slides',
      control: {
        type: 'boolean',
      },
    },
    displayDots: {
      name: 'Display Navigation Dots',
      description: 'Whether to display navigation dots to switch slides',
      control: {
        type: 'boolean',
      },
    },
    autoplay: {
      name: 'Autoplay',
      description: 'Whether to automatically advance slides',
      control: {
        type: 'boolean',
      },
    },
    loop: {
      name: 'Loop',
      description: 'Whether to infinitely loop slides',
      control: {
        type: 'boolean',
      },
    },
    duration: {
      name: 'Duration',
      description: 'Delay between slides change (miliseconds)',
      control: {
        type: 'number',
      },
    },
    spacing: {
      name: 'Spacing',
      description: 'Spacing/gap between slides (in pixels)',
      control: {
        type: 'number',
      },
    },
  },
  args: {
    duration: 3500,
    loop: false,
    slidesToDisplay: 1.25,
    spacing: 32,
    displayArrows: true,
    displayDots: true,
  },
};

const Template = ({
  autoplay,
  bodyContent,
  displayArrows,
  displayDots,
  duration,
  loop,
  slidesToDisplay,
  spacing,
}) =>
  html`
    <outline-slider
      autoplay="${ifDefined(autoplay)}"
      display-arrows="${ifDefined(displayArrows)}"
      display-dots="${ifDefined(displayDots)}"
      duration="${ifDefined(duration)}"
      loop="${ifDefined(loop)}"
      slides-to-display="${ifDefined(slidesToDisplay)}"
      spacing="${ifDefined(spacing)}"
    >
      ${bodyContent}
    </outline-slider>
  `;

const sampleSlide = ({ image }) => {
  return html`
    <div class="rounded-2xl border border-gray-300 p-6 keen-slider__slide">
      <div>
        <picture>
          <img src="${image}" loading="lazy" alt="" />
        </picture>

        <div class="pt-6">
          <outline-heading level="2" level-size="2xl" level-style="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stoici
            scilicet. At enim hic etiam dolore. Illud non continuo, ut aeque
            incontentae.
          </outline-heading>
        </div>
      </div>
    </div>
  `;
};

export const SliderDefault = Template.bind({});

SliderDefault.args = {
  bodyContent: html`
    <div slot="slides" class="slides-collection keen-slider">
      ${sampleSlide({
        image: sampleImage1,
      })}
      ${sampleSlide({
        image: sampleImage2,
      })}
      ${sampleSlide({
        image: sampleImage3,
      })}
      ${sampleSlide({
        image: sampleImage4,
      })}
      ${sampleSlide({
        image: sampleImage5,
      })}
    </div>
  `,
};
