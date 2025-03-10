import { AddIcon } from "@hopper-ui/icons";
import { IconButtonAsLink } from "@components/button/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Div } from "@components/html/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/IconButtonAsLink/secondary",
    component: IconButtonAsLink,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof IconButtonAsLink>;

export default meta;

type IconButtonAsLinkStory = StoryObj<typeof meta>;

export const Default: IconButtonAsLinkStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <IconButtonAsLink size="2xs" aria-label="Add" variant="secondary">
                    <AddIcon />
                </IconButtonAsLink>
                <IconButtonAsLink size="xs" aria-label="Add" variant="secondary">
                    <AddIcon />
                </IconButtonAsLink>
                <IconButtonAsLink size="sm" aria-label="Add" variant="secondary">
                    <AddIcon />
                </IconButtonAsLink>
                <IconButtonAsLink aria-label="Add" variant="secondary">
                    <AddIcon />
                </IconButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <IconButtonAsLink loading size="2xs" aria-label="Add" variant="secondary">
                    <AddIcon />
                </IconButtonAsLink>
                <IconButtonAsLink loading size="xs" aria-label="Add" variant="secondary">
                    <AddIcon />
                </IconButtonAsLink>
                <IconButtonAsLink loading size="sm" aria-label="Add" variant="secondary">
                    <AddIcon />
                </IconButtonAsLink>
                <IconButtonAsLink loading aria-label="Add" variant="secondary">
                    <AddIcon />
                </IconButtonAsLink>
            </Inline>
        </Stack>
    )
};

export const States: IconButtonAsLinkStory = {
    name: "states",
    render: () => (
        <Inline gap="4.5rem">
            <Stack>
                <Inline alignY="end">
                    <IconButtonAsLink active size="2xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink active size="xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink active size="sm" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink active aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink loading active aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <IconButtonAsLink focus size="2xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink focus size="xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink focus size="sm" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink focus aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink loading focus aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <IconButtonAsLink hover size="2xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink hover size="xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink hover size="sm" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink hover aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink loading hover aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <IconButtonAsLink focus hover size="2xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink focus hover size="xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink focus hover size="sm" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink focus hover aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink loading focus hover aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <IconButtonAsLink disabled size="2xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled size="xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled size="sm" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <IconButtonAsLink disabled active size="2xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled active size="xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled active size="sm" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled active aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <IconButtonAsLink disabled focus size="2xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled focus size="xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled focus size="sm" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled focus aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <IconButtonAsLink disabled hover size="2xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled hover size="xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled hover size="sm" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled hover aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <IconButtonAsLink disabled focus hover size="2xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled focus hover size="xs" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled focus hover size="sm" aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                    <IconButtonAsLink disabled focus hover aria-label="Add" variant="secondary">
                        <AddIcon />
                    </IconButtonAsLink>
                </Inline>
            </Stack>
        </Inline>
    )
};

export const Zoom: IconButtonAsLinkStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <IconButtonAsLink variant="secondary">
                    <AddIcon />
                </IconButtonAsLink>
            </Div>
            <Div className="zoom-out">
                <IconButtonAsLink variant="secondary">
                    <AddIcon />
                </IconButtonAsLink>
            </Div>
        </Inline>
    )
};
