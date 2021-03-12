import { newSpecPage } from '@stencil/core/testing';
import { OutlineGrid } from '../outline-grid';

describe('outline-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OutlineGrid],
      html: `<outline-grid></outline-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <outline-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </outline-grid>
    `);
  });
});
