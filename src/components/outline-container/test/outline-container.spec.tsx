import { newSpecPage } from '@stencil/core/testing';
import { OutlineContainer } from '../outline-container';

describe('outline-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OutlineContainer],
      html: `<outline-container></outline-container>`,
    });
    expect(page.root).toEqualHtml(`
      <outline-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </outline-container>
    `);
  });
});
