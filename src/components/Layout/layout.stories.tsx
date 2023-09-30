import { BrowserRouter } from 'react-router-dom'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Layout } from '.'

export default {
    title: 'Layout/Layout',
    component: Layout
} as Meta<typeof Layout>

const Template: StoryFn<typeof Layout> = (args) => {
  return (
    <BrowserRouter>
      <Layout {...args} />
    </BrowserRouter>
    )
}

export const Regular: StoryObj<typeof Layout> = Template.bind({})
