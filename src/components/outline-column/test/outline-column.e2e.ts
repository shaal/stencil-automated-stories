import { newE2EPage } from '@stencil/core/testing';

describe('outline-column', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<outline-column></outline-column>');

    const element = await page.find('outline-column');
    expect(element).toHaveClass('hydrated');
  });
});
