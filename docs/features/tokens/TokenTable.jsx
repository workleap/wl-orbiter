import { ShareGateTheme, ThemeProvider } from "@components/styling";
import { arrayOf, func, shape, string } from "prop-types";

import { Div, Span } from "@components/html";
import { DocsContext } from "@storybook/addon-docs";
import { InfoIcon } from "@components/icons";
import { Table } from "@stories/components";
import { Text } from "@components/typography";
import { useContext } from "react";

const propTypes = {
    colors: arrayOf(shape({
        valueLight: string.isRequired,
        valueDark: string.isRequired,
        token: string.isRequired,
        variable: string.isRequired,
        itemRenderer: func.isRequired,
    })).isRequired
};

function toRowValues({ token, variable, valueLight, valueDark, itemRenderer }) {
    return [
        token,
        variable,
        valueLight,
        valueDark,
        itemRenderer(token)
    ];
}

export function TokenTable({ colors }) {
    const docsContext = useContext(DocsContext);

    return (
        <ThemeProvider theme={ShareGateTheme} colorScheme={docsContext.globals.colorScheme}>
            <Table
                className="token-table"
                columns={[
                    { title: "Token", headerStyle: { width: "240px" }, rowClassName: "code" },
                    { title: "CSS Variable", headerStyle: { width: "350px" }, rowClassName: "code" },
                    { title: "Value (Light)", headerStyle: { width: "175px" }, rowClassName: "code" },
                    { title: "Value (Dark)", headerStyle: { width: "175px" }, rowClassName: "code" },
                    { title: "Example", headerStyle: { width: "200px" }, rowClassName: "example", rowStyle: { backgroundColor: "var(--o-ui-bg-alias-default)" } },
                ]}
                rows={colors.map(x => toRowValues(x))}
            />
        </ThemeProvider>
    );
}

export function backgroundRenderer(token) {
    return <Div height={6} backgroundColor={token}></Div>
}

export function borderRenderer(token) {
    return <Div padding={2}><Div height={6} border={token}></Div></Div>
}

export function boxShadowRenderer(token) {
    return <Div paddingRight={4}><Div boxShadow={token} marginY={3} height={6}></Div></Div>
}

export function fontSizeRenderer(token) {
    return <Div height={12} display="flex" alignItems="center" justifyContent="start"><Text fontSize={token}>Ag</Text></Div>
}

export function fontWeightRenderer(token) {
    return <Div height={5} fontSize={6} fontWeight={token}>Ag</Div>
}

export function iconRenderer(token) {
    if (token === "alias-static-white") {
        return <Div height={6} display="flex" alignItems="center" justifyContent="start" backgroundColor="#000"><InfoIcon fill={token} size="lg" /></Div>
    } else {
        return <Div height={6} display="flex" alignItems="center" justifyContent="start"><InfoIcon fill={token} size="lg" /></Div>
    }
}

export function lineHeightRenderer(token) {
    return <Div display="inline-block" paddingX={2} border="alias-accent" lineHeight={token} borderRadius={2}><Span lineHeight={token}>Ag</Span></Div>
}

export function radiiRenderer(token) {
    if (token === "circular") {
        return <Div height={4} width={4} borderRadius={token} border="alias-accent"></Div>
    } else {
        return <Div height={4} width={8} borderRadius={token} border="alias-accent"></Div>
    }
}

export function sizingRenderer(token) {
    return <Div></Div>
}

export function spacingRenderer(token) {
    return <Div height={4} width={token} backgroundColor="alias-accent" borderRadius={2}></Div>
}

export function textRenderer(token) {
    if (token === "alias-static-white") {
        return <Div height={6} display="flex" alignItems="center" justifyContent="start" backgroundColor="#000"><Text marginLeft={1} color={token} size="lg">Moon</Text></Div>
    } else {
        return <Div height={6} display="flex" alignItems="center" justifyContent="start"><Text marginLeft={1} color={token} size="lg">Moon</Text></Div>
    }
}

TokenTable.propTypes = propTypes;
