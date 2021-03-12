import { Component, Host, h, Prop } from '@stencil/core';
import { VerticalAlignment } from '../../utils/types';

export type colSpanRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type rowSpanRange = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * The content column component. This is intended to be a helper that works with the `<outline-grid>` component.
 *
 * @element outline-column
 * @slot defaultSlot
 */
@Component({
  tag: 'outline-column',
  styleUrl: 'outline-column.css',
  shadow: true,
})
export class OutlineColumn {
  /**
   * The number of columns wide this column should be.
   */
  @Prop({ reflect: true }) colSpanDefault: colSpanRange = 12;

  /**
   * The number of columns wide this column should be on small+ screens.
   */
  @Prop({ reflect: true }) colSpanSm: colSpanRange;

  /**
   * The number of columns wide this column should be on medium+ screens.
   */
  @Prop({ reflect: true }) colSpanMd: colSpanRange;

  /**
   * The number of columns wide this column should be on large+ screens.
   */
  @Prop({ reflect: true }) colSpanLg: colSpanRange;

  /**
   * The number of columns wide this column should be on extra large+ screens.
   */
  @Prop({ reflect: true }) colSpanXl: colSpanRange;

  /**
   * The number of columns wide this column should be on extra extra large+ screens.
   */
  @Prop({ reflect: true }) colSpan2xl: colSpanRange;

  /**
   * The number of rows this column will span.
   */
  @Prop({ reflect: true }) rowSpan: rowSpanRange = 1;
  /**
   * The vertical placement of content inside of the column.
   */
  @Prop({ reflect: true }) contentAlign: VerticalAlignment = 'middle';

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
