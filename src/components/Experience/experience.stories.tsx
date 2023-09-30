import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Experience } from ".";

export default {
    title: 'Layout/Experience',
    component: Experience
} as Meta<typeof Experience>

const Template: StoryFn<typeof Experience> = () => {
    return <Experience />
}

export const Regular: StoryObj<typeof Experience> = Template.bind({})