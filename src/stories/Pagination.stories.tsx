import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Pagination, { PaginationProps } from '../Pagination'

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />

export const Current = Template.bind({})
Current.args = {
  totalResults: 120,
  resultsPerPage: 10,
  onChange: () => {},
  label: "Table navigation",
}

// With programmatically adjusted active page
export const ActivePage = Template.bind({})
ActivePage.args = {
  totalResults: 50,
  resultsPerPage: 15,
  onChange: () => {},
  label: "Table navigation",
  activePage: 3,
}
