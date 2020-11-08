import React, { useState } from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Alert, { AlertProps } from '../Alert'

export default {
  title: 'Alert',
  component: Alert,
} as Meta

const Template: Story<AlertProps> = (args) => <Alert {...args} />

export const Neutral = Template.bind({})
Neutral.args = {
  children: 'This is a neutral alert.',
}

export const Success = Template.bind({})
Success.args = {
  children: 'Success! Check your email to validate your account.',
  type: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  children: 'Oops! Looks like you forgot something.',
  type: 'warning',
}

export const Danger = Template.bind({})
Danger.args = {
  children: 'Something went wrong. Try again later.',
  type: 'danger',
}

export const Info = Template.bind({})
Info.args = {
  children: 'You can always change you name in your profile.',
  type: 'info',
}

export const WithoutClose = Template.bind({})
WithoutClose.args = {
  type: 'success',
  children: "This alert doesn't have a close button.",
  onClose: undefined,
}
