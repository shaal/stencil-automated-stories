import { Component, Host, h, Prop } from '@stencil/core';
import { Size } from '../../utils/types';

/**
 * The grid component.
 *
 * @element outline-grid
 * @slot defaultSlot
 */
@Component({
  tag: 'outline-grid',
  styleUrl: 'outline-grid.css',
  shadow: true,
})
export class OutlineGrid {
  /**
   * How much of a gap should exist between columns? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSize: Size = 'small';

  /**
   * How much of a gap should exist between columns on small+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSizeSm: Size;

  /**
   * How much of a gap should exist between columns on medium+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSizeMd: Size;

  /**
   * How much of a gap should exist between columns on large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSizeLg: Size;

  /**
   * How much of a gap should exist between columns on extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSizeXl: Size;

  /**
   * How much of a gap should exist between columns on extra extra large+ screens? (This affects both the vertical and horizontal column/row gaps.)
   */
  @Prop({ reflect: true }) gapSizeXxl: Size;

  /**
   * Whether or not this is a nested grid. If it's nested, remove padding from the container.
   */
  @Prop() isNested = false;
  /**
   * Whether or not this is a full bleed grid and goes edge to edge.
   */
  @Prop() fullBleed = false;

  render() {
    return (
      <Host>
        <outline-container
          is-nested={this.isNested}
          full-bleed={this.fullBleed}
        >
          <slot></slot>
        </outline-container>
      </Host>
    );
  }
}
