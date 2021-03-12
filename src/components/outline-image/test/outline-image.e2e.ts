import { newE2EPage } from '@stencil/core/testing';

describe('outline-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<outline-image></outline-image>');

    const element = await page.find('outline-image');
    expect(element).toHaveClass('hydrated');
  });
});
