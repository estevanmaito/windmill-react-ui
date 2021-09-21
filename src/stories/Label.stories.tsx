import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Label, { LabelProps } from '../Label'

export default {
  title: 'Label',
  component: Label,
} as Meta

const Template: Story<LabelProps> = (args) => <Label {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic label',
}
