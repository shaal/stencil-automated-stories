import { Component, Host, h, Prop } from '@stencil/core';
import { HorizontalAlignment } from '../../utils/types';

/**
 * The page container component.
 *
 * @element outline-container
 * @slot defaultSlot
 */
@Component({
  tag: 'outline-container',
  styleUrl: 'outline-container.css',
  shadow: true,
})
export class OutlineContainer {
  /**
   * Whether or not this is a nested container. If it's nested, remove padding.
   */
  @Prop() isNested = false;

  /**
   * Whether or not this is a nested container. If it's nested, remove padding.
   */
  @Prop() fullBleed = false;
  /**
   * The horizontal placement of the container..
   */
  @Prop({ reflect: true }) align: HorizontalAlignment = 'center';

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
