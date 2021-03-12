import { newSpecPage } from '@stencil/core/testing';
import { OutlineSlider } from '../outline-slider';

describe('outline-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OutlineSlider],
      html: `<outline-slider></outline-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <outline-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </outline-slider>
    `);
  });
});
