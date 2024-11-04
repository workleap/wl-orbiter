import { IconList } from "@components/icons";
import { Tag } from "@components/tag";
import { Inline, Stack } from "@components/layout";
import { Div } from "@components/html";
import { SparklesIcon } from "@hopper-ui/icons";
import { Text } from "@components/typography";
import { Dot } from "@components/dot";
import { Field, Label } from "@components/field";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Tag/solid",
    component: Tag,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Tag>;

export default meta;

type TagStory = StoryObj<typeof meta>;

export const Default: TagStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Tag size="sm" variant="solid">Falcon 9</Tag>
                <Tag variant="solid">Falcon 9</Tag>
            </Inline>
            <Tag fluid variant="solid">Falcon 9</Tag>
            <Div width="10%">
                <Tag fluid variant="solid">Falcon 9</Tag>
            </Div>
        </Stack>
    )
};

export const Icon: TagStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Tag size="sm" variant="solid">
                    <SparklesIcon />
                    <Text>Falcon 9</Text>
                </Tag>
                <Tag variant="solid">
                    <SparklesIcon />
                    <Text>Falcon 9</Text>
                </Tag>
            </Inline>
            <Inline alignY="end">
                <Tag size="sm" variant="solid">
                    <IconList>
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                    <Text>Falcon 9</Text>
                </Tag>
                <Tag variant="solid">
                    <IconList>
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                    <Text>Falcon 9</Text>
                </Tag>
            </Inline>
            <Tag fluid variant="solid">
                <SparklesIcon />
                <Text>Falcon 9</Text>
            </Tag>
            <Div width="10%">
                <Tag fluid variant="solid">
                    <SparklesIcon />
                    <Text>Falcon 9</Text>
                </Tag>
            </Div>
            <Inline alignY="end">
                <Tag size="sm" variant="solid">
                    <Text>Falcon 9</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </Tag>
                <Tag variant="solid">
                    <Text>Falcon 9</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </Tag>
            </Inline>
            <Tag fluid variant="solid">
                <Text>Falcon 9</Text>
                <IconList slot="end-icon">
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </Tag>
            <Div width="10%">
                <Tag fluid variant="solid">
                    <Text>Falcon 9</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon /><SparklesIcon /><SparklesIcon />
                    </IconList>
                </Tag>
            </Div>
            <Tag variant="solid">
                <SparklesIcon />
                <Text>Falcon 9</Text>
                <IconList slot="end-icon">
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </Tag>
            <Tag fluid variant="solid">
                <SparklesIcon />
                <Text>Falcon 9</Text>
                <IconList slot="end-icon">
                    <SparklesIcon /><SparklesIcon /><SparklesIcon />
                </IconList>
            </Tag>
        </Stack>
    )
};

export const DotStory: TagStory = {
    name: "dot",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Tag size="sm" variant="solid">
                    <Dot color="primary" />
                    <Text>Falcon 9</Text>
                </Tag>
                <Tag variant="solid">
                    <Dot color="primary" />
                    <Text>Falcon 9</Text>
                </Tag>
            </Inline>
            <Tag fluid variant="solid">
                <Dot color="primary" />
                <Text>Falcon 9</Text>
            </Tag>
            <Div width="10%">
                <Tag fluid variant="solid">
                    <Dot color="primary" />
                    <Text>Falcon 9</Text>
                </Tag>
            </Div>
        </Stack>
    )
};

export const Avatar: TagStory = {
    name: "avatar",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Tag size="sm" variant="solid">
                    <Avatar name="Alan Shepard" />
                    <Text>Alan Shepard</Text>
                </Tag>
                <Tag variant="solid">
                    <Avatar name="Alan Shepard" />
                    <Text>Alan Shepard</Text>
                </Tag>
            </Inline>
            <Tag fluid variant="solid">
                <Avatar name="Alan Shepard" />
                <Text>Alan Shepard</Text>
            </Tag>
            <Div width="10%">
                <Tag fluid variant="solid">
                    <Avatar name="Alan Shepard" />
                    <Text>Alan Shepard</Text>
                </Tag>
            </Div>
        </Stack>
    )
};

export const Alignment: TagStory = {
    name: "alignment",
    render: () => (
        <Stack>
            <Tag fluid size="sm" variant="solid">
                <Dot color="primary" />
                <Text>Falcon 9</Text>
            </Tag>
            <Tag fluid size="sm" variant="solid">
                <Avatar name="Alan Shepard" />
                <Text>Falcon 9</Text>
            </Tag>
            <Tag size="sm" fluid variant="solid">
                <SparklesIcon />
                <Text>Falcon 9</Text>
            </Tag>
            <Tag fluid variant="solid">
                <Dot color="primary" />
                <Text>Falcon 9</Text>
            </Tag>
            <Tag fluid variant="solid">
                <Text>Falcon 9</Text>
            </Tag>
            <Tag fluid variant="solid">
                <SparklesIcon />
                <Text>Falcon 9</Text>
            </Tag>
            <Div width="10%">
                <Stack>
                    <Inline>
                        <Tag fluid size="sm" variant="solid">
                            <Dot color="primary" />
                            <Text>Falcon 9</Text>
                        </Tag>
                        <Tag fluid variant="solid">
                            <Dot color="primary" />
                            <Text>Falcon 9</Text>
                        </Tag>
                    </Inline>
                    <Inline>
                        <Tag fluid size="sm" variant="solid">
                            <Text>Falcon 9</Text>
                            <Avatar name="Alan Shepard" />
                        </Tag>
                        <Tag fluid variant="solid">
                            <Text>Falcon 9</Text>
                        </Tag>
                    </Inline>
                    <Inline>
                        <Tag size="sm" fluid variant="solid">
                            <SparklesIcon />
                            <Text>Falcon 9</Text>
                        </Tag>
                        <Tag fluid variant="solid">
                            <SparklesIcon />
                            <Text>Falcon 9</Text>
                        </Tag>
                    </Inline>
                </Stack>
            </Div>
        </Stack>
    )
};

export const Counter: TagStory = {
    name: "counter",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Tag size="sm" variant="solid">
                    <Text>Falcon 9</Text>
                    <Counter variant="divider">60</Counter>
                </Tag>
                <Tag variant="solid">
                    <Text>Falcon 9</Text>
                    <Counter variant="divider">60</Counter>
                </Tag>
            </Inline>
            <Tag fluid variant="solid">
                <Text>Falcon 9</Text>
                <Counter>60</Counter>
            </Tag>
            <Div width="10%">
                <Tag fluid variant="solid">
                    <Text>Falcon 9</Text>
                    <Counter variant="divider">60</Counter>
                </Tag>
            </Div>
        </Stack>
    )
};

export const RemoveButton: TagStory = {
    name: "remove button",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Tag size="sm" onRemove={() => { }} variant="solid">
                    Falcon 9
                </Tag>
                <Tag onRemove={() => { }} variant="solid">
                    Falcon 9
                </Tag>
            </Inline>
            <Tag fluid onRemove={() => { }} variant="solid">
                Falcon 9
            </Tag>
            <Div width="10%">
                <Tag fluid onRemove={() => { }} variant="solid">
                    Falcon 9
                </Tag>
            </Div>
        </Stack>
    )
};

export const Validation: TagStory = {
    name: "validation",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Tag size="sm" onRemove={() => { }} variant="solid" validationState="invalid">
                    Falcon 9
                </Tag>
                <Tag onRemove={() => { }} variant="solid" validationState="invalid">
                    Falcon 9
                </Tag>
            </Inline>
            <Tag fluid onRemove={() => { }} variant="solid" validationState="invalid">
                Falcon 9
            </Tag>
            <Div width="10%">
                <Tag fluid onRemove={() => { }} variant="solid" validationState="invalid">
                    Falcon 9
                </Tag>
            </Div>
            <Field required validationState="invalid">
                <Label>Invalid Field</Label>
                <Tag variant="solid">Falcon 9</Tag>
            </Field>
        </Stack>
    )
};

export const Zoom: TagStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <Tag variant="solid">Falcon 9</Tag>
            </Div>
            <Div className="zoom-out">
                <Tag variant="solid">Falcon 9</Tag>
            </Div>
        </Inline>
    )
};

export const AsLink: TagStory = {
    name: "as link",
    render: () => (
        <Inline>
            <Tag as="a" variant="solid" href="#">Falcon 9</Tag>
            <Tag as="a" variant="solid" href="#" validationState="invalid">Falcon 9</Tag>
            <Tag as="a" active variant="solid" href="#">Falcon 9</Tag>
            <Tag as="a" active variant="solid" href="#" validationState="invalid">Falcon 9</Tag>
            <Tag as="a" focus variant="solid" href="#">Falcon 9</Tag>
            <Tag as="a" focus variant="solid" href="#" validationState="invalid">Falcon 9</Tag>
            <Tag as="a" hover variant="solid" href="#">Falcon 9</Tag>
            <Tag as="a" hover variant="solid" href="#" validationState="invalid">Falcon 9</Tag>
            <Tag as="a" focus hover variant="solid" href="#">Falcon 9</Tag>
            <Tag as="a" focus hover variant="solid" href="#" validationState="invalid">Falcon 9</Tag>
            <Tag as="a" disabled variant="solid" href="#">Falcon 9</Tag>
            <Tag as="a" disabled variant="solid" href="#" validationState="invalid">Falcon 9</Tag>
        </Inline>
    )
};

export const AsButton: TagStory = {
    name: "as button",
    render: () => (
        <Inline>
            <Tag as="button" variant="solid">Falcon 9</Tag>
            <Tag as="button" variant="solid" validationState="invalid">Falcon 9</Tag>
            <Tag as="button" active variant="solid">Falcon 9</Tag>
            <Tag as="button" active variant="solid" validationState="invalid">Falcon 9</Tag>
            <Tag as="button" focus variant="solid">Falcon 9</Tag>
            <Tag as="button" focus variant="solid" validationState="invalid">Falcon 9</Tag>
            <Tag as="button" hover variant="solid">Falcon 9</Tag>
            <Tag as="button" hover variant="solid" validationState="invalid">Falcon 9</Tag>
            <Tag as="button" focus hover variant="solid">Falcon 9</Tag>
            <Tag as="button" focus hover variant="solid" validationState="invalid">Falcon 9</Tag>
            <Tag as="button" disabled variant="solid">Falcon 9</Tag>
            <Tag as="button" disabled variant="solid" validationState="invalid">Falcon 9</Tag>
        </Inline>
    )
};
