import { Component, Prop, h } from '@stencil/core';

import { LinkTarget } from './config';

/**
 * The Outline  Link component
 * @element outline-link
 * @slot defaultSlot
 */
@Component({
  tag: 'outline-link',
  styleUrl: 'outline-link.css',
  shadow: true,
})
export class OutlineLink {
  /**
   * The <a> href attribute
   */
  @Prop() href: string;
  /**
   * The <a> rel attribute
   */
  @Prop() rel: string;
  /**
   * The <a> target attribute
   */
  @Prop() target: LinkTarget = '_self';

  render() {
    return (
      <a href={this.href} rel={this.rel} target={this.target}>
        <slot />
      </a>
    );
  }
}
