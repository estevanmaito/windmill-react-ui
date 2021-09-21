import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Select, { SelectProps } from '../Select'

export default {
  title: 'Select',
  component: Select,
} as Meta

const BasicSelectOptions = () => (
  <>
    <option>Banana</option>
    <option>Apple</option>
    <option>Orange</option>
  </>
)

const MultiSelectOptions = () => (
  <>
    <option>Banana</option>
    <option>Apple</option>
    <option>Orange</option>
  </>
)

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: <BasicSelectOptions />,
  disabled: false,
}

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  children: <MultiSelectOptions />,
  multiple: true,
  disabled: false,
}
