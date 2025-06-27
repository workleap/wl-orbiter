import { Tabs } from "@components/tabs/index.ts";
import { NotificationIcon } from "@hopper-ui/icons";
import { Content, Header } from "@components/placeholders/index.ts";
import { Item } from "@components/collection/index.ts";
import { Div } from "@components/html/index.ts";
import { Stack } from "@components/layout/index.ts";
import { Text, Tag } from "@hopper-ui/components";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Tabs-hopper/heading",
    component: Tabs,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Tabs>;

export default meta;

type TabsStory = StoryObj<typeof meta>;

export const Default: TabsStory = {
    name: "default",
    render: () => (
        <Tabs variant="heading" aria-label="Planets">
            <Item>
                <Header>Mars</Header>
                <Content>
                    Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System (in adherence with the IAU's controversial 2006 definition of planet),
                    being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".[17][18] The latter refers
                    to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.
                    [19] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
                </Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>
                    Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                    times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                    been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                    bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                </Content>
            </Item>
            <Item>
                <Header>Venus</Header>
                <Content>
                    Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.
                </Content>
            </Item>
        </Tabs>
    )
};

export const Fluid: TabsStory = {
    name: "fluid",
    render: () => (
        <Tabs variant="heading" fluid aria-label="Planets">
            <Item>
                <Header>Mars</Header>
                <Content>
                    Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System (in adherence with the IAU's controversial 2006 definition of planet),
                    being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".[17][18] The latter refers
                    to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.
                    [19] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
                </Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>
                    Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                    times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                    been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                    bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                </Content>
            </Item>
            <Item>
                <Header>Venus</Header>
                <Content>
                    Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.
                </Content>
            </Item>
        </Tabs>
    )
};

export const SelectedKeyWithManualKeys: TabsStory = {
    name: "selected key with manual keys",
    render: () => (
        <Stack>
            <Tabs variant="heading" defaultSelectedKey="jupiter" aria-label="Planets">
                <Item key="mars">
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item key="jupiter">
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item key="venus">
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Tabs>
            <Tabs variant="heading" selectedKey="jupiter" aria-label="Planets">
                <Item key="mars">
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item key="jupiter">
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item key="venus">
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Tabs>
        </Stack>
    )
};

export const SelectedKeyWithGeneratedKeys: TabsStory = {
    name: "selected key with generated keys",
    render: () => (
        <Stack>
            <Tabs variant="heading" defaultSelectedKey="1" aria-label="Planets">
                <Item>
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item>
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item>
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Tabs>
            <Tabs variant="heading" selectedKey="1" aria-label="Planets">
                <Item>
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item>
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item>
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Tabs>
        </Stack>
    )
};

export const TabWithIcon: TabsStory = {
    name: "tab with icon",
    render: () => (
        <Tabs variant="heading" aria-label="Planets">
            <Item>
                <Header>
                    <NotificationIcon />
                    <Text>Mars</Text>
                </Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
        </Tabs>
    )
};

export const TabWithLozenge: TabsStory = {
    name: "tab with lozenge",
    render: () => (
        <Tabs variant="heading" aria-label="Planets">
            <Item>
                <Header>
                    <Text>Mars</Text>
                    <Tag slot="lozenge">New</Tag>
                </Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>
                    <NotificationIcon />
                    <Text>Jupiter</Text>
                    <Tag slot="lozenge">New</Tag>
                </Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
        </Tabs>
    )
};

export const TabAsDiv: TabsStory = {
    name: "tab as div",
    render: () => (
        <Tabs variant="heading" aria-label="Planets">
            <Item>
                <Header as="div">Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item>
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const States: TabsStory = {
    name: "states",
    render: () => (
        <Stack>
            <Tabs variant="heading" aria-label="Planets">
                <Item selected>
                    <Header>Uranus</Header>
                    <Content>Uranus is the seventh planet from the Sun.</Content>
                </Item>
                <Item selected hover>
                    <Header>Neptune</Header>
                    <Content>It was the first planet located through mathematical calculations, rather than by telescope.</Content>
                </Item>
                <Item active>
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item focus>
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item hover>
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
                <Item focus hover>
                    <Header>Saturn</Header>
                    <Content>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.</Content>
                </Item>
            </Tabs>
            <Tabs variant="heading" fluid aria-label="Planets">
                <Item selected>
                    <Header>Uranus</Header>
                    <Content>Uranus is the seventh planet from the Sun.</Content>
                </Item>
                <Item selected hover>
                    <Header>Neptune</Header>
                    <Content>It was the first planet located through mathematical calculations, rather than by telescope.</Content>
                </Item>
                <Item active>
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item focus>
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item hover>
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
                <Item focus hover>
                    <Header>Saturn</Header>
                    <Content>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.</Content>
                </Item>
            </Tabs>
            <Tabs variant="heading" aria-label="Planets">
                <Item disabled selected>
                    <Header>Uranus</Header>
                    <Content>Uranus is the seventh planet from the Sun.</Content>
                </Item>
                <Item disabled selected hover>
                    <Header>Neptune</Header>
                    <Content>It was the first planet located through mathematical calculations, rather than by telescope.</Content>
                </Item>
                <Item disabled active>
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item disabled focus>
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item disabled hover>
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
                <Item disabled focus hover>
                    <Header>Saturn</Header>
                    <Content>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.</Content>
                </Item>
            </Tabs>
            <Tabs variant="heading" aria-label="Planets">
                <Item>
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item disabled>
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item>
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Tabs>
        </Stack>
    )
};

export const DisabledTabNotDefaultTab: TabsStory = {
    name: "disabled tab is not the default tab",
    render: () => (
        <Tabs variant="heading" aria-label="Planets">
            <Item disabled>
                <Header>
                    <NotificationIcon />
                    <Text>Mars</Text>
                </Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
        </Tabs>
    )
};

export const DisabledSelectedTabNotDefaultTab: TabsStory = {
    name: "disabled selected tab is not the default tab",
    render: () => (
        <Tabs variant="heading" selectedKey="0" aria-label="Planets">
            <Item disabled>
                <Header>
                    <NotificationIcon />
                    <Text>Mars</Text>
                </Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
        </Tabs>
    )
};

export const Overflow: TabsStory = {
    name: "overflow",
    render: () => (
        <Div width="300px">
            <Tabs variant="heading" aria-label="Planets">
                <Item key="mars">
                    <Header>Mars</Header>
                    <Content>Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.</Content>
                </Item>
                <Item key="jupiter">
                    <Header>Jupiter</Header>
                    <Content>Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.</Content>
                </Item>
                <Item key="venus">
                    <Header>Venus</Header>
                    <Content>Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.</Content>
                </Item>
                <Item key="earth">
                    <Header>
                        <Text>Earth</Text>
                        <Tag slot="lozenge">Home</Tag>
                    </Header>
                    <Content>Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.</Content>
                </Item>
                <Item key="saturn">
                    <Header>
                        <NotificationIcon />
                        <Text>Saturn</Text>
                    </Header>
                    <Content>Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.</Content>
                </Item>
                <Item key="uranus">
                    <Header>
                        <Text>Uranus</Text>
                        <NotificationIcon />
                    </Header>
                    <Content>Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbiter. This unique tilt makes Uranus appear to spin on its side.</Content>
                </Item>
                <Item key="neptune">
                    <Header>
                        <NotificationIcon />
                        <Text>Neptune</Text>
                        <Tag slot="lozenge">New</Tag>
                    </Header>
                    <Content>Neptune—the eighth and most distant major planet orbitering our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.</Content>
                </Item>
            </Tabs>
        </Div>
    )
};

export const OverflowFluid: TabsStory = {
    name: "overflow fluid",
    render: () => (
        <Div width="300px">
            <Tabs variant="heading" aria-label="Planets" fluid>
                <Item key="mars">
                    <Header>Mars</Header>
                    <Content>Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.</Content>
                </Item>
                <Item key="jupiter">
                    <Header>Jupiter</Header>
                    <Content>Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.</Content>
                </Item>
                <Item key="venus">
                    <Header>Venus</Header>
                    <Content>Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.</Content>
                </Item>
                <Item key="earth">
                    <Header>
                        <Text>Earth</Text>
                        <Tag slot="lozenge">Home</Tag>
                    </Header>
                    <Content>Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.</Content>
                </Item>
                <Item key="saturn">
                    <Header>Saturn</Header>
                    <Content>Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.</Content>
                </Item>
                <Item key="uranus">
                    <Header>Uranus</Header>
                    <Content>Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbiter. This unique tilt makes Uranus appear to spin on its side.</Content>
                </Item>
                <Item key="neptune">
                    <Header>Neptune</Header>
                    <Content>Neptune—the eighth and most distant major planet orbitering our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.</Content>
                </Item>
            </Tabs>
        </Div>
    )
};

export const OverflowNotCollapsible: TabsStory = {
    name: "overflow + not collapsible",
    render: () => (
        <Div width="300px">
            <Tabs variant="heading" aria-label="Planets" collapsible={false}>
                <Item key="mars">
                    <Header>Mars</Header>
                    <Content>Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.</Content>
                </Item>
                <Item key="jupiter">
                    <Header>Jupiter</Header>
                    <Content>Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.</Content>
                </Item>
                <Item key="venus">
                    <Header>Venus</Header>
                    <Content>Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.</Content>
                </Item>
                <Item key="earth">
                    <Header>
                        <Text>Earth</Text>
                        <Tag slot="lozenge">Home</Tag>
                    </Header>
                    <Content>Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.</Content>
                </Item>
                <Item key="saturn">
                    <Header>Saturn</Header>
                    <Content>Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.</Content>
                </Item>
                <Item key="uranus">
                    <Header>Uranus</Header>
                    <Content>Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbiter. This unique tilt makes Uranus appear to spin on its side.</Content>
                </Item>
                <Item key="neptune">
                    <Header>Neptune</Header>
                    <Content>Neptune—the eighth and most distant major planet orbitering our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.</Content>
                </Item>
            </Tabs>
        </Div>
    )
};
