import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Education } from ".";

export default {
    title: 'Layout/Education',
    components: Education
} as Meta<typeof Education>

const Template: StoryFn<typeof Education> = () => {
    return <Education />
}

export const Regular: StoryObj<typeof Education> = Template.bind({})