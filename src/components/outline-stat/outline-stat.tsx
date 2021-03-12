import { Component, Prop, h } from '@stencil/core';
import { LinkTarget } from '../outline-link/config';

import {
  IconTypeOutline,
  IconTypeSolid,
  IconTypeCustom,
} from '../outline-icon/config';

export type StatVariant = 'none' | 'primary' | 'secondary' | 'tertiary';

/*
 * The Outline Stat component. Renders a stat or an anchor element based on the props it receives.
 * @element outline-stat
 * @slot defaultSlot
 */
@Component({
  tag: 'outline-stat',
  styleUrl: 'outline-stat.css',
  shadow: true,
})
export class OutlineStat {
  /**
   * The url to use for a link. This will render an anchor element.
   * Do not set this prop if you want to render a stat element.
   */
  @Prop() url: string;

  /**
   * The target to use for a link, used in conjunction with the url attribute.
   */
  @Prop() target: LinkTarget = '_self';

  /**
   * The stat style variant to use.
   */
  @Prop({ reflect: true }) variant: StatVariant = 'primary';

  /**
   * Choose which predefined icon to add to the link
   */
  @Prop() icon: IconTypeCustom | IconTypeSolid | IconTypeOutline;

  /**
   * Whether the stat is disabled. Only applies to
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
      <stat class={`btn ${this.variant}`} disabled={this.disabled}>
        <slot />
        {this.icon && <outline-icon icon={this.icon} />}
      </stat>
    );
  }
}
