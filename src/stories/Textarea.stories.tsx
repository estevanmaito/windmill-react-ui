import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Textarea, { TextareaProps } from '../Textarea'

export default {
  title: 'Textarea',
  component: Textarea,
} as Meta

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />

export const Basic = Template.bind({})
