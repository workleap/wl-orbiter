import { Button } from "@react-components/button";
import { Inline, Stack } from "@react-components/layout";
import { SignoutIcon } from "@react-components/icons";
import { Text } from "@react-components/text";
import { createButtonTestSuite } from "./createButtonTestSuite";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("Button"))
        .segment(segment)
        .parameters(paramsBuilder()
            .canvasLayout({ width: "80%" })
            .chromaticDelay(100)
            .build())
        .build();
}

createButtonTestSuite(<Button variant="solid" />, stories("/solid"));

createButtonTestSuite(<Button variant="outline" />, stories("/outline"));

createButtonTestSuite(<Button variant="ghost" />, stories("/ghost"));

stories("/link")
    .add("default", () =>
        <Inline align="end">
            <Button variant="link" size="small">Button</Button>
            <Button variant="link">Button</Button>
            <Button variant="link" size="large">Button</Button>
        </Inline>
    )
    .add("icon", () =>
        <Stack>
            <Inline align="end">
                <Button variant="link" size="small">
                    <SignoutIcon />
                    <Text>Button</Text>
                </Button>
                <Button variant="link">
                    <SignoutIcon />
                    <Text>Button</Text>
                </Button>
                <Button variant="link" size="large">
                    <SignoutIcon />
                    <Text>Button</Text>
                </Button>
            </Inline>
        </Stack>
    )
    .add("primary", () =>
        <Stack>
            <Inline align="end">
                <Button variant="link" color="primary" size="small">Button</Button>
                <Button variant="link" color="primary">Button</Button>
                <Button variant="link" color="primary" size="large">Button</Button>
            </Inline>
        </Stack>
    )
    .add("secondary", () =>
        <Stack>
            <Inline align="end">
                <Button variant="link" color="secondary" size="small">Button</Button>
                <Button variant="link" color="secondary">Button</Button>
                <Button variant="link" color="secondary" size="large">Button</Button>
            </Inline>
        </Stack>
    )
    .add("danger", () =>
        <Stack>
            <Inline align="end">
                <Button variant="link" color="danger" size="small">Button</Button>
                <Button variant="link" color="danger">Button</Button>
                <Button variant="link" color="danger" size="large">Button</Button>
            </Inline>
        </Stack>
    )
    .add("states", () =>
        <Stack>
            <Inline align="end">
                <Button variant="link" active size="small">Button</Button>
                <Button variant="link" active>Button</Button>
                <Button variant="link" active size="large">Button</Button>
            </Inline>
            <Inline align="end">
                <Button variant="link" focus size="small">Button</Button>
                <Button variant="link" focus>Button</Button>
                <Button variant="link" focus size="large">Button</Button>
            </Inline>
            <Inline align="end">
                <Button variant="link" hover size="small">Button</Button>
                <Button variant="link" hover>Button</Button>
                <Button variant="link" hover size="large">Button</Button>
            </Inline>
            <Inline align="end">
                <Button variant="link" focus hover size="small">Button</Button>
                <Button variant="link" focus hover>Button</Button>
                <Button variant="link" focus hover size="large">Button</Button>
            </Inline>
            <Inline align="end">
                <Button variant="link" disabled size="small">Button</Button>
                <Button variant="link" disabled>Button</Button>
                <Button variant="link" disabled size="large">Button</Button>
            </Inline>
        </Stack>
    )
    .add("styling", () =>
        <Inline>
            <Button variant="link" className="bg-red">Button</Button>
            <Button variant="link" style={{ backgroundColor: "red" }}>Button</Button>
        </Inline>
    )
    .add("as anchor", () =>
        <Button variant="link" as="a" href="https://www.sharegate.com" target="_blank">Button</Button>
    );

stories()
    .add("styling", () =>
        <Inline>
            <Button className="bg-red">Button</Button>
            <Button style={{ backgroundColor: "red" }}>Button</Button>
        </Inline>
    )
    .add("autofocus", () =>
        <Button autoFocus>Button</Button>
    )
    .add("when disabled do not autofocus", () =>
        <Button disabled autoFocus>Button</Button>
    )
    .add("autofocus with delay", () =>
        <Button autoFocus autoFocusDelay={50}>Button</Button>
    );



