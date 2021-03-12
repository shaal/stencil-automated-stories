import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { argTypeHidden } from '../../utils/utils';
import { AllowedAlertTypes } from './config';
import { AllIcons } from '../outline-icon/config';

const typeOptions: AllowedAlertTypes[] = [
  'info',
  'success',
  'warning',
  'error',
];

export default {
  title: 'Molecules/Alert',
  component: 'outline-alert',
  argTypes: {
    alertContent: argTypeHidden,
    type: {
      control: {
        type: 'select',
        options: typeOptions,
      },
    },
    icon: {
      control: {
        type: 'select',
        options: AllIcons,
      },
    },
  },
  args: {
    alertContent: html`
      <div slot="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </p>
      </div>
    `,
  },
};

const Template = ({ type, icon, alertContent }) =>
  html`
    <outline-container>
      <outline-alert type="${ifDefined(type)}" icon="${ifDefined(icon)}">
        ${alertContent}
      </outline-alert>
    </outline-container>
  `;

export const Alert = Template.bind({});
Alert.args = {
  type: 'info',
};
