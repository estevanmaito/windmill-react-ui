import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Backdrop, { BackdropProps } from '../Backdrop'

export default {
  title: 'Backdrop',
  component: Backdrop,
} as Meta

const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />

export const Basic = Template.bind({})
