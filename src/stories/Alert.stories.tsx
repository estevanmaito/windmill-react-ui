import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Alert, { AlertProps } from '../Alert'

export default {
  title: 'Alert',
  component: Alert,
} as Meta

const Template: Story<AlertProps> = (args) => <Alert {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'This is a neutral alert.',
  type: 'neutral',
}

export const WithoutClose = Template.bind({})
WithoutClose.args = {
  type: 'success',
  children: "This alert doesn't have a close button.",
  onClose: undefined,
}
