import { Component, Prop, h, Host } from '@stencil/core';
import { AllowedAlertTypes, AlertClassTypes } from './config';
import {
  IconTypeOutline,
  IconTypeSolid,
  IconTypeCustom,
} from '../outline-icon/config';

/**
 * The Alert component.
 * @element outline-alert
 * @slot content - The primary slot to render the alert content.
 */
@Component({
  tag: 'outline-alert',
  styleUrl: 'outline-alert.css',
  shadow: true,
})
export class OutlineAlert {
  /**
   * The alert style to apply:
   * info | success | warning | error
   */
  @Prop() type: AllowedAlertTypes = 'info';
  /**
   * Choose which predefined icon to add to the link
   */
  @Prop() icon: IconTypeCustom | IconTypeSolid | IconTypeOutline;

  render() {
    const defaultClasses: AlertClassTypes = {
      background: 'rounded-md p-4',
      text: 'mt-2 text-sm content',
    };
    let statusClasses: AlertClassTypes;
    switch (this.type) {
      case 'info':
        statusClasses = {
          background: 'bg-ui-info',
          text: 'text-ui-infoText',
        };
        break;
      case 'warning':
        statusClasses = {
          background: 'bg-ui-warning',
          text: 'text-ui-warningText',
        };
        break;
      case 'success':
        statusClasses = {
          background: 'bg-ui-success',
          text: 'text-ui-successText',
        };
        break;
      case 'error':
        statusClasses = {
          background: 'bg-ui-error',
          text: 'text-ui-errorText',
        };
        break;
    }
    const combinedClasses: AlertClassTypes = {
      background: `${statusClasses.background} ${defaultClasses.background}`,
      text: `${statusClasses.text} ${defaultClasses.text}`,
    };
    // console.log(combinedClasses);
    return (
      <Host>
        <div class={combinedClasses.background}>
          <div class="flex">
            {this.icon && (
              <div class="flex-shrink-0">
                <outline-icon class="w-12" icon={this.icon}></outline-icon>
              </div>
            )}

            <div class={this.icon !== undefined ? 'ml-3' : 'ml-0'}>
              <div class={combinedClasses.text}>
                <slot name="content" />
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
