import { Component, Element, State, Prop, h, Host } from '@stencil/core';

/**
 * The Card component.
 * @element outline-card
 * @slot header - The header slot.
 * @slot content - The primary slot to render the card content.
 * @slot footer - The footer slot.
 */
@Component({
  tag: 'outline-card',
  styleUrl: 'outline-card.css',
  shadow: true,
})
export class OutlineCard {
  @Element() hostElement: HTMLOutlineCardElement;
  /**
   * The color class to apply to the header slot.
   */
  @Prop() bgColorHeader: string;
  /**
   * The color class to apply to the content slot.
   */
  @Prop() bgColorContent: string;
  /**
   * The color class to apply to the footer slot.
   */
  @Prop() bgColorFooter: string;
  /**
   * Whether or not this is a nested container. If it's nested, remove padding.
   */
  @Prop() isRounded = false;
  /**
   * Whether or not this card has a shadow.
   */
  @Prop() hasShadow = false;

  @State() hasHeaderSlot: boolean;
  @State() hasContentSlot: boolean;
  @State() hasFooterSlot: boolean;

  componentWillLoad() {
    this.hasHeaderSlot =
      this.hostElement.querySelector('[slot="header"]') !== null;
    this.hasContentSlot =
      this.hostElement.querySelector('[slot="content"]') !== null;
    this.hasFooterSlot =
      this.hostElement.querySelector('[slot="footer"]') !== null;
  }

  render() {
    const cardClasses = {
      'card': true,
      'shadow': this.hasShadow,
      'rounded-2xl': this.isRounded,
    };
    const headerBackgroundClasses = {
      'card-header': true,
      [`bg-${this.bgColorHeader}`]: this.bgColorHeader !== undefined,
    };
    const contentBackgroundClasses = {
      'card-content': true,
      [`bg-${this.bgColorContent}`]: this.bgColorContent !== undefined,
    };
    const footerBackgroundClasses = {
      'card-footer': true,
      [`bg-${this.bgColorFooter}`]: this.bgColorFooter !== undefined,
    };

    return (
      <Host>
        <section class={cardClasses}>
          {this.hasHeaderSlot && (
            <section class={headerBackgroundClasses}>
              <slot name="header" />
            </section>
          )}
          {this.hasContentSlot && (
            <section class={contentBackgroundClasses}>
              <slot name="content" />
            </section>
          )}
          {this.hasFooterSlot && (
            <section class={footerBackgroundClasses}>
              <slot name="footer" />
            </section>
          )}
        </section>
      </Host>
    );
  }
}
