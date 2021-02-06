import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Avatar, { AvatarProps } from '../Avatar'

import avatarImage from './static/avatar-1.jpg'

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  src: avatarImage,
  alt: 'Profile image',
}

export const Regular = Template.bind({})
Regular.args = {
  src: avatarImage,
  alt: 'Profile image',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  src: avatarImage,
  alt: 'Profile image',
}
