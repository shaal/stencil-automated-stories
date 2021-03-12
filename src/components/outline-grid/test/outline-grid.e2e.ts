import { newE2EPage } from '@stencil/core/testing';

describe('outline-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<outline-grid></outline-grid>');

    const element = await page.find('outline-grid');
    expect(element).toHaveClass('hydrated');
  });
});
