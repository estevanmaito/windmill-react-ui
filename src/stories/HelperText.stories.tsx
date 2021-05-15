import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import HelperText, { HelperTextProps } from '../HelperText'

export default {
  title: 'HelperText',
  component: HelperText,
} as Meta

const Template: Story<HelperTextProps> = (args) => <HelperText {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Helper text used with inputs.',
  valid: undefined,
}

export const WithValidation = Template.bind({})
WithValidation.args = {
  children: 'Helper text used with inputs.',
  valid: true,
}
