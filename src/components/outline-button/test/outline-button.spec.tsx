import { newSpecPage } from '@stencil/core/testing';
import { OutlineButton } from '../outline-button';

describe('outline-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OutlineButton],
      html: `<outline-button></outline-button>`,
    });
    expect(page.root).toEqualHtml(`
      <outline-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </outline-button>
    `);
  });
});
