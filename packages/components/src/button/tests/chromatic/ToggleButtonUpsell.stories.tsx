import { Inline, Stack } from "@components/layout/index.ts";
import { ToggleButton } from "@components/button/index.ts";
import { LightbulbIcon } from "@hopper-ui/icons";
import { Div } from "@components/html/index.ts";

import { Meta, StoryObj } from "@storybook/react";
import { Text } from "@components/typography/index.ts";

const meta = {
    title: "Chromatic/ToggleButton/upsell",
    component: ToggleButton,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof ToggleButton>;

export default meta;

type ToggleButtonStory = StoryObj<typeof meta>;

export const Default: ToggleButtonStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ToggleButton size="sm" variant="upsell">Cutoff</ToggleButton>
                <ToggleButton variant="upsell">Cutoff</ToggleButton>
            </Inline>
            <ToggleButton variant="upsell">
                <Text>Cutoff</Text>
                <LightbulbIcon />
            </ToggleButton>
            <Inline alignY="end">
                <ToggleButton size="sm" variant="upsell">Aa</ToggleButton>
                <ToggleButton variant="upsell">Aa</ToggleButton>
            </Inline>
            <Inline alignY="end">
                <ToggleButton checked variant="upsell">Aa</ToggleButton>
                <ToggleButton active variant="upsell">Aa</ToggleButton>
                <ToggleButton focus variant="upsell">Aa</ToggleButton>
                <ToggleButton hover variant="upsell">Aa</ToggleButton>
                <ToggleButton focus hover variant="upsell">Aa</ToggleButton>
                <ToggleButton disabled variant="upsell">Aa</ToggleButton>
            </Inline>
        </Stack>
    )
};

export const States: ToggleButtonStory = {
    name: "states",
    render: () => (
        <Inline alignY="end">
            <ToggleButton checked variant="upsell">Cutoff</ToggleButton>
            <ToggleButton active variant="upsell">Cutoff</ToggleButton>
            <ToggleButton focus variant="upsell">Cutoff</ToggleButton>
            <ToggleButton hover variant="upsell">Cutoff</ToggleButton>
            <ToggleButton focus hover variant="upsell">Cutoff</ToggleButton>
            <ToggleButton disabled variant="upsell">Cutoff</ToggleButton>
        </Inline>
    )
};

export const Checked: ToggleButtonStory = {
    name: "checked",
    render: () => (
        <Inline>
            <ToggleButton checked variant="upsell">Cutoff</ToggleButton>
            <ToggleButton defaultChecked variant="upsell">Cutoff</ToggleButton>
            <ToggleButton checked variant="upsell">
                <Text>Cutoff</Text>
                <LightbulbIcon />
            </ToggleButton>
        </Inline>
    )
};

export const Zoom: ToggleButtonStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <ToggleButton variant="upsell">Cutoff</ToggleButton>
            </Div>
            <Div className="zoom-out">
                <ToggleButton variant="upsell">Cutoff</ToggleButton>
            </Div>
        </Inline>
    )
};
