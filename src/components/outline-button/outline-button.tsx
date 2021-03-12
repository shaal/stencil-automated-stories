import { Component, Prop, h } from '@stencil/core';
import { LinkTarget } from '../outline-link/config';

import {
  IconTypeOutline,
  IconTypeSolid,
  IconTypeCustom,
} from '../outline-icon/config';

export type ButtonVariant = 'none' | 'primary' | 'secondary' | 'tertiary';

/*
 * The Outline Button component. Renders a button or an anchor element based on the props it receives.
 * @element outline-button
 * @slot defaultSlot
 */
@Component({
  tag: 'outline-button',
  styleUrl: 'outline-button.css',
  shadow: true,
})
export class OutlineButton {
  /**
   * The url to use for a link. This will render an anchor element.
   * Do not set this prop if you want to render a button element.
   */
  @Prop() url: string;

  /**
   * The target to use for a link, used in conjunction with the url attribute.
   */
  @Prop() target: LinkTarget = '_self';

  /**
   * The button style variant to use.
   */
  @Prop({ reflect: true }) variant: ButtonVariant = 'primary';

  /**
   * Choose which predefined icon to add to the link
   */
  @Prop() icon: IconTypeCustom | IconTypeSolid | IconTypeOutline;

  /**
   * Whether the button is disabled. Only applies to
   * implementations not using the url prop
   */
  @Prop() disabled: boolean;

  render() {
    return this.url !== undefined ? (
      <a class={`btn ${this.variant}`} href={this.url} target={this.target}>
        <slot />
        {this.icon && <outline-icon icon={this.icon} />}
      </a>
    ) : (
      <button class={`btn ${this.variant}`} disabled={this.disabled}>
        <slot />
        {this.icon && <outline-icon icon={this.icon} />}
      </button>
    );
  }
}
