import { newE2EPage } from '@stencil/core/testing';

describe('outline-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<outline-container></outline-container>');

    const element = await page.find('outline-container');
    expect(element).toHaveClass('hydrated');
  });
});
