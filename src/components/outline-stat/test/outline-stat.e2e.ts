import { newE2EPage } from '@stencil/core/testing';

describe('outline-stat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<outline-stat></outline-stat>');

    const element = await page.find('outline-stat');
    expect(element).toHaveClass('hydrated');
  });
});
