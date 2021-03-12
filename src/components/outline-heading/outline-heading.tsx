import { Component, Prop, h } from '@stencil/core';

import {
  AllowedHeadingLevels,
  AllowedHeadingSizes,
  AllowedHeadingStyles,
} from './config';

/**
 * The Heading component.
 * @element outline-heading
 * @slot defaultSlot
 */
@Component({
  tag: 'outline-heading',
  styleUrl: 'outline-heading.css',
  shadow: true,
})
export class OutlineHeading {
  /**
   * The heading tag to apply: 1 | 2 | 3 | 4
   */
  @Prop() level: AllowedHeadingLevels = 2;
  /**
   * The heading level size to apply. Optional override to default styles for a given level
   */
  @Prop() levelSize: AllowedHeadingSizes = '3xl';
  /**
   * The heading level style to apply. Optional override to default styles for a given level
   */
  @Prop() levelStyle: AllowedHeadingStyles = 'bold';
  /**
   * The smaller, decorative subheading style
   */
  @Prop() sub = false;

  render() {
    // classNames object for dynamic classes
    const headingClasses = {
      headline: !this.sub,
      [`text-${this.levelSize}`]: true,
      [`font-${this.levelStyle}`]: true,
      // Warning: there is no style for subheadline-4!
      subheadline: this.sub,
      [`text-${this.levelSize}`]: true,
      [`font-${this.levelStyle}`]: true,
    };

    switch (this.level) {
      case 1:
        return (
          <h1 class={headingClasses}>
            <slot />
          </h1>
        );
      case 2:
        return (
          <h2 class={headingClasses}>
            <slot />
          </h2>
        );
      case 3:
        return (
          <h3 class={headingClasses}>
            <slot />
          </h3>
        );
      case 4:
        return (
          <h4 class={headingClasses}>
            <slot />
          </h4>
        );
      case 5:
        return (
          <h5 class={headingClasses}>
            <slot />
          </h5>
        );
      case 6:
        return (
          <h6 class={headingClasses}>
            <slot />
          </h6>
        );
    }
  }
}
