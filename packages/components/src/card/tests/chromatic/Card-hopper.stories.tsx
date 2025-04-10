import { ApolloBanner, ApolloPoster } from "./assets/index.tsx";
import { Box } from "@components/box/index.ts";
import { Card } from "@components/card/index.ts";
import { Div } from "@components/html/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Flex, Heading } from "@hopper-ui/components";
import { Image } from "@components/image/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Card-hopper",
    component: Card,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Card>;

export default meta;

type CardStory = StoryObj<typeof meta>;

export const Zoom: CardStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <Card>
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Div>
            <Div className="zoom-out">
                <Card>
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Div>
        </Inline>
    )
};

export const Styling: CardStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Card border="warning">
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
            <Card className="border-red">
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
            <Card style={{ border: "1px solid red" }}>
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
        </Inline>
    )
};

export const HorizontalAndImage: CardStory = {
    name: "horizontal & image",
    render: () => (
        <Stack>
            <Card orientation="horizontal">
                <Image src={ApolloPoster} alt="Appolo 11" />
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
            <Card fluid orientation="horizontal">
                <Image src={ApolloPoster} alt="Appolo 11" width="200px" />
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
        </Stack>
    )
};

export const VerticalAndImage: CardStory = {
    name: "vertical & image",
    render: () => (
        <Stack>
            <Card orientation="vertical">
                <Image src={ApolloBanner} alt="Appolo 11" />
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
            <Card fluid orientation="vertical">
                <Image src={ApolloBanner} alt="Appolo 11" objectFit="cover" height="200px" />
                <Heading>Nasa</Heading>
                <Content>The National Aeronautics and Space Administration</Content>
            </Card>
        </Stack>
    )
};

export const GridLayout: CardStory = {
    name: "grid layout",
    render: () => (
        <Stack>
            <Box style={{ display: "grid", gap: "var(--o-ui-sp-7)", gridTemplateColumns: "1fr 1fr" }}>
                <Card>
                    <Image src={ApolloBanner} alt="Appolo 11 Banner" />
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Box>
            <Box style={{ display: "grid", gap: "var(--o-ui-sp-7)", gridTemplateColumns: "1fr 1fr" }}>
                <Card fluid>
                    <Image src={ApolloBanner} alt="Appolo 11 Banner" />
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card fluid orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Box>
        </Stack>
    )
};

export const FlexLayout: CardStory = {
    name: "flex layout",
    render: () => (
        <Stack>
            <Flex gap="core_160">
                <Card>
                    <Image src={ApolloBanner} alt="Appolo 11 Banner" />
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card orientation="horizontal">
                    <Image src={ApolloBanner} alt="Appolo 11 Banner" />
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Flex>
            <Flex gap="core_160">
                <Card fluid>
                    <Image src={ApolloBanner} alt="Appolo 11 Banner" />
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card fluid orientation="horizontal">
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
                <Card fluid orientation="horizontal">
                    <Image src={ApolloBanner} alt="Appolo 11 Banner" />
                    <Heading>Nasa</Heading>
                    <Content>The National Aeronautics and Space Administration</Content>
                </Card>
            </Flex>
        </Stack>
    )
};
