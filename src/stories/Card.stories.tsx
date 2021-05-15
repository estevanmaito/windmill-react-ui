import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Card, { CardProps } from '../Card'

export default {
  title: 'Card',
  component: Card,
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

// TODO: Add composed examples with CardBody
export const Basic = Template.bind({})
Basic.args = {
  children: 'Hello',
}

export const Colored = Template.bind({})
Colored.args = {
  children: 'Hello',
  colored: true,
  className: 'bg-red-200',
}
