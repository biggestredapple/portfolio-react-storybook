import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Project } from ".";

export default {
    title: 'Layout/Project',
    component: Project
} as Meta<typeof Project>

const Template: StoryFn<typeof Project> = () => {
    return <Project />
}

export const Regular: StoryObj<typeof Project> = Template.bind({})