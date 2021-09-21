import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Badge, { BadgeProps } from '../Badge'

export default {
  title: 'Badge',
  component: Badge,
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'badge text',
  type: 'neutral',
}
