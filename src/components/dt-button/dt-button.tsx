import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dt-button',
  styleUrl: 'dt-button.css',
  shadow: true,
})

// export interface ButtonProps {
//   label: string;
// }

// export function ShButton({ label }: ButtonProps) {
//   return <button class="sh-button">{label}</button>;
// }

export class MyButton {

  render() {
    return (
      <Host>
        <button class="sh-button">
          <slot>
          </slot>
        </button>;
      </Host>
    );
  }
}
