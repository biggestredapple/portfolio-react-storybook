import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Welcome } from ".";

export default {
    title: 'Layout/Welcome',
    component: Welcome
} as Meta<typeof Welcome>

const Template: StoryFn<typeof Welcome> = () => {
    return <Welcome />
}

export const Regular: StoryObj<typeof Welcome> = Template.bind({})