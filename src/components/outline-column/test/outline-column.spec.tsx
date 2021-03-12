import { newSpecPage } from '@stencil/core/testing';
import { OutlineColumn } from '../outline-column';

describe('outline-column', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OutlineColumn],
      html: `<outline-column></outline-column>`,
    });
    expect(page.root).toEqualHtml(`
      <outline-column>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </outline-column>
    `);
  });
});
