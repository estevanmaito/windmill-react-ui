import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Table, { TableProps } from '../Table'

export default {
  title: 'Table',
  component: Table,
} as Meta

const Template: Story<TableProps> = (args) => <Table {...args} />

export const Basic = Template.bind({})
