import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Badge, { BadgeProps } from '../Badge'

export default {
  title: 'Badge',
  component: Badge,
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Neutral = Template.bind({})
Neutral.args = {
  children: 'This is a neutral badge.',
  type: 'neutral'
}

export const Success = Template.bind({})
Success.args = {
  children: 'Success!',
  type: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  children: 'Warning!',
  type: 'warning',
}

export const Danger = Template.bind({})
Danger.args = {
  children: 'Problem!',
  type: 'danger',
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: "Primary theme.",
}
