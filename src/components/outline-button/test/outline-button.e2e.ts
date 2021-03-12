import { newE2EPage } from '@stencil/core/testing';

describe('outline-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<outline-button></outline-button>');

    const element = await page.find('outline-button');
    expect(element).toHaveClass('hydrated');
  });
});
