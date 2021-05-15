import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Dropdown, { DropdownProps } from '../Dropdown'
import DropdownItem from '../DropdownItem'
import Button from '../Button'

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta

const Template: Story<DropdownProps> = (args) => (
  <>
    <Button>Click to open</Button>
    <Dropdown {...args}>
      <DropdownItem>Hello</DropdownItem>
    </Dropdown>
  </>
)

export const Basic = Template.bind({})
Basic.args = {
  onClose: () => {},
  isOpen: false,
}
