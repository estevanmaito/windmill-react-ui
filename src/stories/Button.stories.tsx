import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '../Button'

import { FaHeart } from 'react-icons/fa'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Regular = Template.bind({})
Regular.args = {
  children: 'Regular',
  size: 'regular'
}

export const Larger = Template.bind({})
Larger.args = {
  children: 'Larger',
  size: 'larger'
}

export const Large = Template.bind({})
Large.args = {
  children: 'Large',
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Small',
  size: 'small',
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline',
  layout: 'outline'
}

export const Link = Template.bind({})
Link.args = {
  children: 'Link',
  layout: 'link'
}

export const Icon = Template.bind({})
Icon.args = {
  children: 'Like',
  icon: FaHeart
}

export const IconOutline = Template.bind({})
IconOutline.args = {
  children: 'Like',
  layout: 'outline',
  icon: FaHeart
}

export const IconLink = Template.bind({})
IconLink.args = {
  children: 'Like',
  layout: 'link',
  icon: FaHeart
}

