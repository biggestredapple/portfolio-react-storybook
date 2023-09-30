import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Skills } from ".";

export default {
    title: 'Layout/Skills',
    component: Skills
} as Meta<typeof Skills>

const Template: StoryFn<typeof Skills> = () => {
    return <Skills />
}

export const Regular: StoryObj<typeof Skills> = Template.bind({})