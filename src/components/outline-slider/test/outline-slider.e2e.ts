import { newE2EPage } from '@stencil/core/testing';

describe('outline-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<outline-slider></outline-slider>');

    const element = await page.find('outline-slider');
    expect(element).toHaveClass('hydrated');
  });
});
