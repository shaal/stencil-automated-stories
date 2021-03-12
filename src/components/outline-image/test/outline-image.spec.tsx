import { newSpecPage } from '@stencil/core/testing';
import { outlineImage } from '../outline-image';

describe('outline-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [outlineImage],
      html: `<outline-image></outline-image>`,
    });
    expect(page.root).toEqualHtml(`
      <outline-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </outline-image>
    `);
  });
});
