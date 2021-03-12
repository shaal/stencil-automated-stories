import { newSpecPage } from '@stencil/core/testing';
import { OutlineStat } from '../outline-stat';

describe('outline-stat', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OutlineStat],
      html: `<outline-stat></outline-stat>`,
    });
    expect(page.root).toEqualHtml(`
      <outline-stat>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </outline-stat>
    `);
  });
});
