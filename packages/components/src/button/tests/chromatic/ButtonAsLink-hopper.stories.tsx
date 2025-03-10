import { ButtonAsLink } from "@components/button/index.ts";
import { Inline } from "@components/layout/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ButtonAsLink-hopper",
    component: ButtonAsLink,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof ButtonAsLink>;

export default meta;

type ButtonAsLinkStory = StoryObj<typeof meta>;

export const Styling: ButtonAsLinkStory = {
    name: "styling",
    render: () => (
        <Inline>
            <ButtonAsLink border="sunken-treasure-600" variant="secondary">Button</ButtonAsLink>
            <ButtonAsLink className="bg-red" variant="secondary">Button</ButtonAsLink>
            <ButtonAsLink style={{ backgroundColor: "red" }} variant="secondary">Button</ButtonAsLink>
        </Inline>
    )
};
