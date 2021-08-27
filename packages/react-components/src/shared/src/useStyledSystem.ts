import { CSSProperties, useMemo } from "react";
import { Entry, LiteralUnion, Simplify } from "type-fest";
import { isNil } from "./assertions";

/*
TODO:
- Breakpoints -> Breakpoint | BreakpointValue | Responsive | ResponsiveValue
- Interpolation for style values (and props like "border") -> Do we support it or not? Not supporting it would encourage using the other props
*/

/*
TODO FRANK:
- Would love to introduce something like border="red" and the resulting atomic css class would also set by default border-width: "1px" & border-style" solid
    -> Could it introduce some specifity bug if someone also a different border width or style?
    -> Could also introduce a concept of "shorthands" at the useStyledSystem layer
    -> Maybe it's easier to finally introduce interpolation and let the user do border="$border-widths-1 solid $sunray-1" <- not as cool as border="sunray-1"
*/

export type GlobalValue =
    "inherit" |
    "initial" |
    "revert" |
    "unset";

export type LengthType =
    "px" |
    "em" |
    "rem" |
    "ch" |
    "vw" |
    "vh" |
    "vmin" |
    "vmax";

export type LengthUnit = `${number}${LengthType}`;

export type LengthShorthand =
    `${LengthUnit}` |
    `${LengthUnit} ${LengthUnit}` |
    `${LengthUnit} ${LengthUnit} ${LengthUnit}` |
    `${LengthUnit} ${LengthUnit} ${LengthUnit} ${LengthUnit}`;

const OrbitSpacingScale = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
] as const;

export type OrbitSpace = typeof OrbitSpacingScale[number];

function createOrbitSpacingScaleClasses<IncludeZero extends boolean = false>(section: string, includeZero?: IncludeZero) {
    const classes: Record<number, string> = {};

    if (includeZero) {
        classes[0] = `o-ui-${section}-0`;
    }

    OrbitSpacingScale.reduce((acc, x) => {
        acc[x] = `o-ui-${section}-${x}`;

        return acc;
    }, classes);

    return classes as Record<IncludeZero extends true ? 0 | OrbitSpace : OrbitSpace, string>;
}

export type SpaceValue = OrbitSpace | LengthUnit | GlobalValue;

const OrbitBorderWidthScale = [
    1,
    2,
    3,
    4,
    5
] as const;

export type OrbitBorderWidth = typeof OrbitBorderWidthScale[number];

function createOrbitBorderWidthScaleClasses<IncludeZero extends boolean = false>(section: string, includeZero?: IncludeZero) {
    const classes: Record<number, string> = {};

    if (includeZero) {
        classes[0] = `o-ui-${section}-0`;
    }

    OrbitBorderWidthScale.reduce((acc, x) => {
        acc[x] = `o-ui-${section}-${x}`;

        return acc;
    }, classes);

    return classes as Record<IncludeZero extends true ? 0 | OrbitBorderWidth : OrbitBorderWidth, string>;
}

export type BorderWithValue = OrbitBorderWidth | LengthUnit | GlobalValue;

export type NamedColor =
    "aliceblue" |
    "antiquewhite" |
    "aqua" |
    "aquamarine" |
    "azure" |
    "beige" |
    "bisque" |
    "black" |
    "blanchedalmond" |
    "blue" |
    "blueviolet" |
    "brown" |
    "burlywood" |
    "cadetblue" |
    "chartreuse" |
    "chocolate" |
    "coral" |
    "cornflowerblue" |
    "cornsilk" |
    "crimson" |
    "cyan" |
    "darkblue" |
    "darkcyan" |
    "darkgoldenrod" |
    "darkgray" |
    "darkgreen" |
    "darkgrey" |
    "darkkhaki" |
    "darkmagenta" |
    "darkolivegreen" |
    "darkorange" |
    "darkorchid" |
    "darkred" |
    "darksalmon" |
    "darkseagreen" |
    "darkslateblue" |
    "darkslategray" |
    "darkslategrey" |
    "darkturquoise" |
    "darkviolet" |
    "deeppink" |
    "deepskyblue" |
    "dimgray" |
    "dimgrey" |
    "dodgerblue" |
    "firebrick" |
    "floralwhite" |
    "forestgreen" |
    "fuchsia" |
    "gainsboro" |
    "ghostwhite" |
    "gold" |
    "goldenrod" |
    "gray" |
    "green" |
    "greenyellow" |
    "grey" |
    "honeydew" |
    "hotpink" |
    "indianred" |
    "indigo" |
    "ivory" |
    "khaki" |
    "lavender" |
    "lavenderblush" |
    "lawngreen" |
    "lemonchiffon" |
    "lightblue" |
    "lightcoral" |
    "lightcyan" |
    "lightgoldenrodyellow" |
    "lightgray" |
    "lightgreen" |
    "lightgrey" |
    "lightpink" |
    "lightsalmon" |
    "lightseagreen" |
    "lightskyblue" |
    "lightslategray" |
    "lightslategrey" |
    "lightsteelblue" |
    "lightyellow" |
    "lime" |
    "limegreen" |
    "linen" |
    "magenta" |
    "maroon" |
    "mediumaquamarine" |
    "mediumblue" |
    "mediumorchid" |
    "mediumpurple" |
    "mediumseagreen" |
    "mediumslateblue" |
    "mediumspringgreen" |
    "mediumturquoise" |
    "mediumvioletred" |
    "midnightblue" |
    "mintcream" |
    "mistyrose" |
    "moccasin" |
    "navajowhite" |
    "navy" |
    "oldlace" |
    "olive" |
    "olivedrab" |
    "orange" |
    "orangered" |
    "orchid" |
    "palegoldenrod" |
    "palegreen" |
    "paleturquoise" |
    "palevioletred" |
    "papayawhip" |
    "peachpuff" |
    "peru" |
    "pink" |
    "plum" |
    "powderblue" |
    "purple" |
    "rebeccapurple" |
    "red" |
    "rosybrown" |
    "royalblue" |
    "saddlebrown" |
    "salmon" |
    "sandybrown" |
    "seagreen" |
    "seashell" |
    "sienna" |
    "silver" |
    "skyblue" |
    "slateblue" |
    "slategray" |
    "slategrey" |
    "snow" |
    "springgreen" |
    "steelblue" |
    "tan" |
    "teal" |
    "thistle" |
    "tomato" |
    "turquoise" |
    "violet" |
    "wheat" |
    "white" |
    "whitesmoke" |
    "yellow" |
    "yellowgreen";

export type ColorExpressionType =
    "#" |
    "rgb" |
    "rgba" |
    "hsl" |
    "hsla";

export type ColorExpression = `${ColorExpressionType}${string}`;

export type CssColor = ColorExpression | NamedColor;

export const OrbitColors = [
    "current",
    "transparent",
    "white",
    "black",
    // Marine
    "marine-1",
    "marine-2",
    "marine-3",
    "marine-4",
    "marine-5",
    "marine-6",
    "marine-7",
    "marine-8",
    "marine-9",
    "marine-10",
    // Sunray
    "sunray-1",
    "sunray-2",
    "sunray-3",
    "sunray-4",
    "sunray-5",
    "sunray-6",
    "sunray-7",
    "sunray-8",
    "sunray-9",
    "sunray-10",
    // Moonstone
    "moonstone-1",
    "moonstone-2",
    "moonstone-3",
    "moonstone-4",
    "moonstone-5",
    "moonstone-6",
    "moonstone-7",
    "moonstone-8",
    "moonstone-9",
    "moonstone-10",
    // Cloud
    "cloud-1",
    "cloud-2",
    "cloud-3",
    "cloud-4",
    "cloud-5",
    "cloud-6",
    "cloud-7",
    "cloud-8",
    "cloud-9",
    "cloud-10",
    // Neutral
    "neutral-1",
    "neutral-2",
    "neutral-3",
    "neutral-4",
    "neutral-5",
    "neutral-6",
    "neutral-7",
    "neutral-8",
    "neutral-9",
    "neutral-10",
    // Neutral dark
    "neutral-dark-1",
    "neutral-dark-2",
    "neutral-dark-3",
    "neutral-dark-4",
    "neutral-dark-5",
    "neutral-dark-6",
    "neutral-dark-7",
    "neutral-dark-8",
    "neutral-dark-9",
    "neutral-dark-10",
    // Beetle
    "beetle-1",
    "beetle-2",
    "beetle-3",
    "beetle-4",
    "beetle-5",
    "beetle-6",
    "beetle-7",
    "beetle-8",
    "beetle-9",
    "beetle-10",
    // Botanic
    "botanic-1",
    "botanic-2",
    "botanic-3",
    "botanic-4",
    "botanic-5",
    "botanic-6",
    "botanic-7",
    "botanic-8",
    "botanic-9",
    "botanic-10",
    // Primary
    "primary-1",
    "primary-2",
    "primary-3",
    "primary-4",
    "primary-5",
    "primary-6",
    "primary-7",
    "primary-8",
    "primary-9",
    "primary-10"
] as const;

export type OrbitColor = typeof OrbitColors[number];

function createOrbitColorClasses(section?: string) {
    const template = isNil(section) ? (x: string) => `o-ui-${x}` : (x: string) => `o-ui-${section}-${x}`;

    return OrbitColors.reduce((acc, x) => {
        acc[x] = template(x);

        return acc;
    }, {} as Record<OrbitColor, string>);
}

export type ColorValue = OrbitColor | CssColor | GlobalValue;

export const BackgroundColorRoleClasses = {
    "alias-1": "o-ui-alias-bg-1",
    "alias-2": "o-ui-alias-bg-2",
    "alias-3": "o-ui-alias-bg-3",
    "alias-4": "o-ui-alias-bg-4",
    "alias-5": "o-ui-alias-bg-5",
    "alias-6": "o-ui-alias-bg-6",
    "alias-primary-1": "o-ui-alias-bg-primary-1",
    "alias-primary-2": "o-ui-alias-bg-primary-2",
    "alias-negative-1": "o-ui-alias-bg-negative-1",
    "alias-negative-2": "o-ui-alias-bg-negative-2",
    "alias-warning-1": "o-ui-alias-bg-warning-1",
    "alias-warning-2": "o-ui-alias-bg-warning-2",
    "alias-positive-1": "o-ui-alias-bg-positive-1",
    "alias-positive-2": "o-ui-alias-bg-positive-2",
    "alias-info-1": "o-ui-alias-bg-info-1"
} as const;

export const BackgroundColorClasses = { ...createOrbitColorClasses("bg"), ...BackgroundColorRoleClasses };

export const BackgroundPositionClasses = {
    "top": "o-ui-bg-top",
    "bottom": "o-ui-bg-bottom",
    "left": "o-ui-bg-left",
    "right": "o-ui-bg-right",
    "center": "o-ui-bgp-center",
    "left-top": "o-ui-bg-left-top",
    "left-bottom": "o-ui-bg-left-bottom",
    "right-top": "o-ui-bg-right-top",
    "right-bottom": "o-ui-bg-right-bottom"
} as const;

export const BackgroundSizeClasses = {
    "auto": "o-ui-bg-auto",
    "cover": "o-ui-bg-cover",
    "contain": "o-ui-bg-contain"
} as const;

export const BorderColorRoleClasses = {
    "alias-1": "o-ui-alias-b-1",
    "alias-2": "o-ui-alias-b-2",
    "alias-3": "o-ui-alias-b-3",
    "alias-4": "o-ui-alias-b-4",
    "alias-primary-1": "o-ui-alias-b-primary-1",
    "alias-primary-1-translucent": "o-ui-alias-b-primary-1-translucent",
    "alias-negative-1": "o-ui-alias-b-negative-1",
    "alias-negative-1-translucent": "o-ui-alias-b-negative-1-translucent",
    "alias-negative-2": "o-ui-alias-b-negative-2",
    "alias-warning-1": "o-ui-alias-b-warning-1",
    "alias-positive-1": "o-ui-alias-b-positive-1"
} as const;

export const BorderColorClasses = { ...createOrbitColorClasses("b"), ...BorderColorRoleClasses };

export const BorderRadiusClasses = {
    0: "o-ui-b-radius-0",
    1: "o-ui-b-radius-1",
    2: "o-ui-b-radius-2",
    3: "o-ui-b-radius-3",
    4: "o-ui-b-radius-4",
    "100": "o-ui-b-radius-100",
    "pill": "o-ui-pill"
} as const;

export const BorderStyleClasses = {
    "solid": "o-ui-b-solid",
    "dashed": "o-ui-b-dashed",
    "dotted": "o-ui-b-dotted",
    "double": "o-ui-b-double",
    "none": "o-ui-b-none"
} as const;

export const BorderWidthClasses = createOrbitBorderWidthScaleClasses("ba", true);

export const BorderTopWidthClasses = createOrbitBorderWidthScaleClasses("bt", true);

export const BorderBottomWidthClasses = createOrbitBorderWidthScaleClasses("bb", true);

export const BorderLeftWidthClasses = createOrbitBorderWidthScaleClasses("bl", true);

export const BorderRightWidthClasses = createOrbitBorderWidthScaleClasses("br", true);

// TODO FRANK: Do we realistically need vertical border classes?
export const BorderVerticalWidthClasses = createOrbitBorderWidthScaleClasses("bv", true);

// TODO FRANK: Do we realistically need horizontal border classes?
export const BorderHorizontalWidthClasses = createOrbitBorderWidthScaleClasses("bh", true);

export const BottomClasses = createOrbitSpacingScaleClasses("bottom", true);

export const BoxShadowClasses = {
    1: "o-ui-bs-1",
    2: "o-ui-bs-2",
    3: "o-ui-bs-3",
    4: "o-ui-bs-4",
    "alias-skim": "o-ui-alias-bs-skim",
    "alias-lifted": "o-ui-alias-bs-lifted",
    "alias-raised": "o-ui-alias-bs-raised",
    "alias-floating": "o-ui-alias-bs-floating"
} as const;

export const BoxSizingClasses = {
    "border-box": "o-ui-box-sizing-border-box",
    "content-box": "o-ui-box-sizing-content-box"
} as const;

export const ColorRoleClasses = {
    "alias-1": "o-ui-alias-text-1",
    "alias-2": "o-ui-alias-text-2",
    "alias-3": "o-ui-alias-text-3",
    "alias-4": "o-ui-alias-text-4",
    "alias-primary-1": "o-ui-alias-text-primary-1",
    "alias-negative-1": "o-ui-alias-text-negative-1",
    "alias-negative-2": "o-ui-alias-text-negative-2",
    "alias-info-1": "o-ui-alias-text-info-1",
    "alias-positive-1": "o-ui-alias-text-positive-1",
    "alias-positive-2": "o-ui-alias-text-positive-2",
    "alias-warning-1": "o-ui-alias-text-warning-1",
    "alias-warning-2": "o-ui-alias-text-warning-2",
    "alias-input-selection": "o-ui-alias-text-input-selection",
    "alias-input-placeholder": "o-ui-alias-text-input-placeholder"
} as const;

export const ColorClasses = { ...createOrbitColorClasses(), ...ColorRoleClasses };

export const CursorClasses = {
    "help": "o-ui-cursor-help",
    "auto": "o-ui-cursor-auto",
    "wait": "o-ui-cursor-wait",
    "crosshair": "o-ui-cursor-crosshair",
    "not-allowed": "o-ui-cursor-not-allowed",
    "grab": "o-ui-cursor-grab",
    "zoom-in": "o-ui-cursor-zoom-in"
} as const;

export const DisplayClasses = {
    "block": "o-ui-db",
    "inline-block": "o-ui-dib",
    "inline": "o-ui-di",
    "flex": "o-ui-df",
    "inline-flex": "o-ui-dif",
    "table": "o-ui-dt",
    "inline-table": "o-ui-dit",
    "table-caption": "o-ui-dt-caption",
    "table-cell": "o-ui-dt-cell",
    "table-column": "o-ui-dt-column",
    "table-column-group": "o-ui-dt-cg",
    "table-footer-group": "o-ui-dt-fg",
    "table-header-group": "o-ui-dt-hg",
    "table-row-group": "o-ui-dt-rg",
    "table-row": "o-ui-dt-row",
    "grid": "o-ui-dg",
    "inline-grid": "o-ui-dig",
    "list-item": "o-ui-dli",
    "none": "o-ui-dn"
} as const;

export const FillRoleClasses = {
    "alias-icon-1": "o-ui-alias-icon-1",
    "alias-icon-2": "o-ui-alias-icon-2",
    "alias-icon-primary-1": "o-ui-alias-icon-primary-1",
    "alias-icon-negative-1": "o-ui-alias-icon-negative-1",
    "alias-icon-negative-2": "o-ui-alias-icon-negative-2",
    "alias-icon-positive-1": "o-ui-alias-icon-positive-1",
    "alias-icon-positive-2": "o-ui-alias-icon-positive-2",
    "alias-icon-warning-1": "o-ui-alias-icon-warning-1",
    "alias-icon-warning-2": "o-ui-alias-icon-warning-2",
    "alias-icon-info-1": "o-ui-alias-icon-info-1"
} as const;

export const FillClasses = { ...createOrbitColorClasses("fill"), ...FillRoleClasses };

export const FontSizeClasses = {
    1: "o-ui-fs-1",
    2: "o-ui-fs-2",
    3: "o-ui-fs-3",
    4: "o-ui-fs-4",
    5: "o-ui-fs-5",
    6: "o-ui-fs-6",
    7: "o-ui-fs-7",
    8: "o-ui-fs-8",
    9: "o-ui-fs-9",
    "subheadline": "o-ui-subheadline",
    "headline": "o-ui-headline"
} as const;

export const FontWeightClasses = {
    1: "o-ui-fw-1",
    2: "o-ui-fw-2",
    3: "o-ui-fw-3",
    4: "o-ui-fw-4",
    5: "o-ui-fw-5",
    6: "o-ui-fw-6",
    7: "o-ui-fw-7",
    8: "o-ui-fw-8",
    9: "o-ui-fw-9"
} as const;

export const HeightAdditionalClasses = {
    "100%": "o-ui-h-100",
    "screen": "o-ui-h-screen",
    "auto": "o-ui-h-auto",
    "max-content": "o-ui-h-max",
    "min-content": "o-ui-h-min"
} as const;

export const HeightClasses = { ...createOrbitSpacingScaleClasses("h", true), ...HeightAdditionalClasses };

export const LeftClasses = createOrbitSpacingScaleClasses("left", true);

export const LineHeightClasses = {
    1: "o-ui-lh-1",
    2: "o-ui-lh-2",
    3: "o-ui-lh-3",
    4: "o-ui-lh-4",
    5: "o-ui-lh-5",
    6: "o-ui-lh-6",
    "none": "o-ui-lh-none"
} as const;

export const MarginClasses = createOrbitSpacingScaleClasses("ma", true);

export const MarginTopClasses = createOrbitSpacingScaleClasses("mt", true);

export const MarginBottomClasses = createOrbitSpacingScaleClasses("mb", true);

export const MarginLeftClasses = createOrbitSpacingScaleClasses("ml", true);

export const MarginRightClasses = createOrbitSpacingScaleClasses("mr", true);

export const MarginVerticalClasses = createOrbitSpacingScaleClasses("mv", true);

export const MarginHorizontalClasses = createOrbitSpacingScaleClasses("mh", true);

export const MaxHeightAdditionalClasses = {
    "100%": "o-ui-max-h-100",
    "auto": "o-ui-max-h-auto",
    "max-content": "o-ui-max-h-max",
    "min-content": "o-ui-max-h-min"
} as const;

export const MaxHeightClasses = { ...createOrbitSpacingScaleClasses("max-h"), ...MaxHeightAdditionalClasses };

export const MaxWidthAdditionalClasses = {
    "100%": "o-ui-max-w-100",
    "auto": "o-ui-max-w-auto",
    "max-content": "o-ui-max-w-max",
    "min-content": "o-ui-max-w-min"
} as const;

export const MaxWidthClasses = { ...createOrbitSpacingScaleClasses("max-w"), ...MaxWidthAdditionalClasses };

export const MinHeightAdditionalClasses = {
    "100%": "o-ui-min-h-100",
    "auto": "o-ui-min-h-auto",
    "max-content": "o-ui-min-h-max",
    "min-content": "o-ui-min-h-min"
} as const;

export const MinHeightClasses = { ...createOrbitSpacingScaleClasses("min-h"), ...MinHeightAdditionalClasses };

export const MinWidthAdditionalClasses = {
    "100%": "o-ui-min-w-100",
    "auto": "o-ui-min-w-auto",
    "max-content": "o-ui-min-w-max",
    "min-content": "o-ui-min-w-min"
} as const;

export const MinWidthClasses = { ...createOrbitSpacingScaleClasses("min-w"), ...MinWidthAdditionalClasses };

export const ObjectFitClasses = {
    "fill": "o-ui-of-fill",
    "contain": "o-ui-of-contain",
    "cover": "o-ui-of-cover",
    "none": "o-ui-of-none",
    "scale-down": "o-ui-of-scale-down"
} as const;

export const OverflowClasses = {
    "hidden": "o-ui-overflow-hidden",
    "visible": "o-ui-overflow-visible",
    "scroll": "o-ui-overflow-scroll",
    "clip": "o-ui-overflow-clip",
    "auto": "o-ui-overflow-auto",
    "x-hidden": "o-ui-overflow-x-hidden",
    "x-visible": "o-ui-overflow-x-visible",
    "x-scroll": "o-ui-overflow-x-scroll",
    "x-clip": "o-ui-overflow-x-clip",
    "x-auto": "o-ui-overflow-x-auto",
    "y-hidden": "o-ui-overflow-y-hidden",
    "y-visible": "o-ui-overflow-y-visible",
    "y-scroll": "o-ui-overflow-y-scroll",
    "y-auto": "o-ui-overflow-y-auto",
    "y-clip": "o-ui-overflow-y-clip"
} as const;

export const PaddingClasses = createOrbitSpacingScaleClasses("pa", true);

export const PaddingTopClasses = createOrbitSpacingScaleClasses("pt", true);

export const PaddingBottomClasses = createOrbitSpacingScaleClasses("pb", true);

export const PaddingLeftClasses = createOrbitSpacingScaleClasses("pl", true);

export const PaddingRightClasses = createOrbitSpacingScaleClasses("pr", true);

export const PaddingVerticalClasses = createOrbitSpacingScaleClasses("pv", true);

export const PaddingHorizontalClasses = createOrbitSpacingScaleClasses("ph", true);

export const PositionClasses = {
    "static": "o-ui-static",
    "fixed": "o-ui-fixed",
    "absolute": "o-ui-absolute",
    "relative": "o-ui-relative",
    "sticky": "o-ui-sticky"
} as const;

export const RightClasses = createOrbitSpacingScaleClasses("right", true);

export const StrokeClasses = createOrbitColorClasses("stroke");

export const TextAlignClasses = {
    "start": "o-ui-ta-s",
    "end": "o-ui-ta-e",
    "left": "o-ui-ta-l",
    "right": "o-ui-ta-r",
    "center": "o-ui-ta-c",
    "justify": "o-ui-ta-j",
    "justify-all": "o-ui-ta-ja",
    "match-parent": "o-ui-ta-mp"
} as const;

export const TextDecorationClasses = {
    "underline": "o-ui-underline",
    "strike": "o-ui-strike",
    "no-underline": "o-ui-no-underline"
} as const;

export const TextOverflowClasses = {
    "ellipsis": "o-ui-to-ellipsis",
    "clip": "o-ui-to-clip"
} as const;

export const TextTransformClasses = {
    "uppercase": "o-ui-tt-u",
    "lowercase": "o-ui-tt-l",
    "capitalize": "o-ui-tt-c",
    "none": "o-ui-tt-none"
} as const;

export const TopClasses = createOrbitSpacingScaleClasses("top", true);

export const VerticalAlignClasses = {
    "top": "o-ui-va-top",
    "middle": "o-ui-va-middle",
    "bottom": "o-ui-va-bottom",
    "baseline": "o-ui-va-baseline",
    "sub": "o-ui-va-sub",
    "super": "o-ui-va-super",
    "text-top": "o-ui-va-text-top",
    "text-bottom": "o-ui-va-text-bottom"
} as const;

export const WidthAdditionalClasses = {
    "100%": "o-ui-w-100",
    "screen": "o-ui-w-screen",
    "auto": "o-ui-w-auto",
    "max-content": "o-ui-w-max",
    "min-content": "o-ui-w-min"
} as const;

export const WhiteSpaceClasses = {
    "nowrap": "o-ui-ws-nowrap",
    "pre": "o-ui-ws-pre",
    "pre-wrap": "o-ui-ws-pre-wrap",
    "pre-line": "o-ui-ws-pre-line",
    "break-spaces": "o-ui-ws-break-spaces",
    "normal": "o-ui-ws-normal"
} as const;

export const WidthClasses = { ...createOrbitSpacingScaleClasses("w", true), ...WidthAdditionalClasses };

export const WordBreakClasses = {
    "normal": "o-ui-wb-normal",
    "break-all": "o-ui-wb-break-all",
    "break-word": "o-ui-wb-break-word",
    "keep-all": "o-ui-wb-keep-all"
} as const;

export const ZindexClasses = {
    0: "o-ui-z-0",
    1: "o-ui-z-1",
    2: "o-ui-z-2",
    3: "o-ui-z-3",
    4: "o-ui-z-4",
    5: "o-ui-z-5",
    "999": "o-ui-z-999",
    "9999": "o-ui-z-9999",
    "max": "o-ui-z-9999"
} as const;

export type BackgroundColorProp = Simplify<keyof typeof BackgroundColorRoleClasses | ColorValue>;

export type BackgroundPositionProp = Simplify<LiteralUnion<keyof typeof BackgroundPositionClasses, string> | GlobalValue>;

export type BackgroundSizeProp = Simplify<LiteralUnion<keyof typeof BackgroundSizeClasses, string> | GlobalValue>;

export type BorderColorProp = Simplify<keyof typeof BorderColorRoleClasses | ColorValue>;

export type BorderRadiusProp = Simplify<keyof typeof BorderRadiusClasses | GlobalValue>;

export type BorderStyleProp = Simplify<keyof typeof BorderStyleClasses | GlobalValue>;

export type BorderWidthProp = Simplify<BorderWithValue>;

export type BorderTopWidthProp = Simplify<BorderWithValue>;

export type BorderBottomWidthProp = Simplify<BorderWithValue>;

export type BorderLeftWidthProp = Simplify<BorderWithValue>;

export type BorderRightWidthProp = Simplify<BorderWithValue>;

export type BorderVerticalWidthProp = Simplify<BorderWithValue>;

export type BorderHorizontalWidthProp = Simplify<BorderWithValue>;

export type BottomProp = Simplify<LiteralUnion<keyof typeof BottomClasses, string> | GlobalValue>;

export type BoxShadowProp = Simplify<keyof typeof BoxShadowClasses | GlobalValue>;

export type BoxSizingProp = Simplify<keyof typeof BoxSizingClasses | GlobalValue>;

export type ColorProp = Simplify<keyof typeof ColorRoleClasses | ColorValue>;

export type CursorProp = Simplify<keyof typeof CursorClasses | ColorValue>;

export type DisplayProp = Simplify<keyof typeof DisplayClasses | GlobalValue>;

export type FillProp = Simplify<keyof typeof FillRoleClasses | ColorValue>;

export type FontSizeProp = Simplify<LiteralUnion<keyof typeof FontSizeClasses, string> | GlobalValue>;

export type FontWeightProp = Simplify<keyof typeof FontWeightClasses | GlobalValue>;

export type HeightProp = Simplify<keyof typeof HeightAdditionalClasses | SpaceValue>;

export type LeftProp = Simplify<LiteralUnion<keyof typeof LeftClasses, string> | GlobalValue>;

export type LineHeightProp = Simplify<LiteralUnion<keyof typeof LineHeightClasses, string> | GlobalValue>;

export type MarginProp = Simplify<keyof typeof MarginClasses | LengthShorthand | GlobalValue>;

export type MarginTopProp = Simplify<SpaceValue>;

export type MarginBottomProp = Simplify<SpaceValue>;

export type MarginLeftProp = Simplify<SpaceValue>;

export type MarginRightProp = Simplify<SpaceValue>;

export type MarginVerticalProp = Simplify<SpaceValue>;

export type MarginHorizontalProp = Simplify<SpaceValue>;

export type MaxHeightProp = Simplify<keyof typeof MaxHeightAdditionalClasses | SpaceValue>;

export type MaxWidthProp = Simplify<keyof typeof MaxWidthAdditionalClasses | SpaceValue>;

export type MinHeightProp = Simplify<keyof typeof MinHeightAdditionalClasses | SpaceValue>;

export type MinWidthProp = Simplify<keyof typeof MinWidthAdditionalClasses | SpaceValue>;

export type ObjectFitProp = Simplify<keyof typeof ObjectFitClasses | SpaceValue>;

export type OverflowProp = Simplify<keyof typeof OverflowClasses | SpaceValue>;

export type PaddingProp = Simplify<keyof typeof PaddingClasses | LengthShorthand | GlobalValue>;

export type PaddingTopProp = Simplify<SpaceValue>;

export type PaddingBottomProp = Simplify<SpaceValue>;

export type PaddingLeftProp = Simplify<SpaceValue>;

export type PaddingRightProp = Simplify<SpaceValue>;

export type PaddingVerticalProp = Simplify<SpaceValue>;

export type PaddingHorizontalProp = Simplify<SpaceValue>;

export type PositionProp = Simplify<keyof typeof PositionClasses | GlobalValue>;

export type RightProp = Simplify<LiteralUnion<keyof typeof RightClasses, string> | GlobalValue>;

export type StrokeProp = Simplify<ColorValue>;

export type TextAlignProp = Simplify<keyof typeof TextAlignClasses | GlobalValue>;

export type TextDecorationProp = Simplify<keyof typeof TextDecorationClasses | GlobalValue>;

export type TextOverflowProp = Simplify<keyof typeof TextOverflowClasses | GlobalValue>;

export type TextTransformProp = Simplify<keyof typeof TextTransformClasses | GlobalValue>;

export type TopProp = Simplify<LiteralUnion<keyof typeof TopClasses, string> | GlobalValue>;

export type VerticalAlignProp = Simplify<keyof typeof VerticalAlignClasses | GlobalValue>;

export type WhiteSpaceProp = Simplify<keyof typeof WordBreakClasses | SpaceValue>;

export type WidthProp = Simplify<keyof typeof WidthAdditionalClasses | SpaceValue>;

export type WordBreakProp = Simplify<keyof typeof WordBreakClasses | SpaceValue>;

export type ZindexProp = Simplify<LiteralUnion<keyof typeof ZindexClasses, string> | GlobalValue>;

export interface StyleProps {
    backgroundColor?: BackgroundColorProp;
    backgroundPosition?: BackgroundPositionProp;
    backgroundSize?: BackgroundSizeProp;
    border?: string;
    borderColor?: BorderColorProp;
    borderRadius?: BorderRadiusProp;
    borderStyle?: BorderStyleProp;
    borderWidth?: BorderWidthProp;
    borderTop?: string;
    borderTopWidth?: BorderTopWidthProp;
    borderBottom?: string;
    borderBottomWidth?: BorderBottomWidthProp;
    borderLeft?: string;
    borderLeftWidth?: BorderLeftWidthProp;
    borderRight?: string;
    borderRightWidth?: BorderRightWidthProp;
    borderVerticalWidth?: BorderVerticalWidthProp;
    borderHorizontalWidth?: BorderHorizontalWidthProp;
    bottom?: BottomProp;
    boxShadow?: BoxShadowProp;
    boxSizing?: BoxSizingProp;
    color?: ColorProp;
    cursor?: CursorProp;
    display?: DisplayProp;
    fill?: FillProp;
    fontSize?: FontSizeProp;
    fontWeight?: FontWeightProp;
    height?: HeightProp;
    left?: LeftProp;
    lineHeight?: LineHeightProp;
    margin?: MarginProp;
    marginTop?: MarginTopProp;
    marginBottom?: MarginBottomProp;
    marginLeft?: MarginLeftProp;
    marginRight?: MarginRightProp;
    marginVertical?: MarginVerticalProp;
    marginHorizontal?: MarginHorizontalProp;
    maxHeight?: MaxHeightProp;
    maxWidth?: MaxWidthProp;
    minHeight?: MinHeightProp;
    minWidth?: MinWidthProp;
    objectFit?: ObjectFitProp;
    overflow?: OverflowProp;
    padding?: PaddingProp;
    paddingTop?: PaddingTopProp;
    paddingBottom?: PaddingBottomProp;
    paddingLeft?: PaddingLeftProp;
    paddingRight?: PaddingRightProp;
    paddingVertical?: PaddingVerticalProp;
    paddingHorizontal?: PaddingHorizontalProp;
    position?: PositionProp;
    right?: RightProp;
    stroke?: StrokeProp;
    textAlign?: TextAlignProp;
    textDecoration?: TextDecorationProp;
    textOverflow?: TextOverflowProp;
    textTransform?: TextTransformProp;
    top?: TopProp;
    verticalAlign?: VerticalAlignProp;
    whiteSpace?: WhiteSpaceProp;
    width?: WidthProp;
    wordBreak?: WordBreakProp;
    zIndex?: ZindexProp;
    className?: string;
    style?: CSSProperties;
}

interface Context {
    classes: string[];
    style: Record<string, any>;
}

type PropHandler<T> = (name: string, value: T, context: Context) => void;

function createPropHandler<V extends string>(classes: Record<V, string>): PropHandler<V> {
    return (name, value, context) => {
        const className = classes[value as keyof typeof classes];

        if (!isNil(className)) {
            context.classes.push(className);
        } else {
            context.style[name] = value;
        }
    };
}

const PropsHandlers: Record<string, PropHandler<unknown>> = {
    backgroundColor: createPropHandler(BackgroundColorClasses),
    backgroundPosition: createPropHandler(BackgroundPositionClasses),
    backgroundSize: createPropHandler(BackgroundSizeClasses),
    borderColor: createPropHandler(BorderColorClasses),
    borderRadius: createPropHandler(BorderRadiusClasses),
    borderWidth: createPropHandler(BorderWidthClasses),
    borderTopWidth: createPropHandler(BorderTopWidthClasses),
    borderBottomWidth: createPropHandler(BorderBottomWidthClasses),
    borderLeftWidth: createPropHandler(BorderLeftWidthClasses),
    borderRightWidth: createPropHandler(BorderRightWidthClasses),
    borderVerticalWidth: createPropHandler(BorderVerticalWidthClasses),
    borderHorizontalWidth: createPropHandler(BorderHorizontalWidthClasses),
    bottom: createPropHandler(BottomClasses),
    boxShadow: createPropHandler(BoxShadowClasses),
    boxSizing: createPropHandler(BoxSizingClasses),
    color: createPropHandler(ColorClasses),
    cursor: createPropHandler(CursorClasses),
    display: createPropHandler(DisplayClasses),
    fill: createPropHandler(FillClasses),
    fontSize: createPropHandler(FontSizeClasses),
    fontWeight: createPropHandler(FontWeightClasses),
    height: createPropHandler(HeightClasses),
    left: createPropHandler(LeftClasses),
    lineHeight: createPropHandler(LineHeightClasses),
    margin: createPropHandler(MarginClasses),
    marginTop: createPropHandler(MarginTopClasses),
    marginBottom: createPropHandler(MarginBottomClasses),
    marginLeft: createPropHandler(MarginLeftClasses),
    marginRight: createPropHandler(MarginRightClasses),
    marginVertical: createPropHandler(MarginVerticalClasses),
    marginHorizontal: createPropHandler(MarginHorizontalClasses),
    maxHeight: createPropHandler(MaxHeightClasses),
    maxWidth: createPropHandler(MaxWidthClasses),
    minHeight: createPropHandler(MinHeightClasses),
    minWidth: createPropHandler(MinWidthClasses),
    objectFit: createPropHandler(ObjectFitClasses),
    overflow: createPropHandler(OverflowClasses),
    padding: createPropHandler(PaddingClasses),
    paddingTop: createPropHandler(PaddingTopClasses),
    paddingBottom: createPropHandler(PaddingBottomClasses),
    paddingLeft: createPropHandler(PaddingLeftClasses),
    paddingRight: createPropHandler(PaddingRightClasses),
    paddingVertical: createPropHandler(PaddingVerticalClasses),
    paddingHorizontal: createPropHandler(PaddingHorizontalClasses),
    position: createPropHandler(PositionClasses),
    right: createPropHandler(RightClasses),
    stroke: createPropHandler(StrokeClasses),
    textAlign: createPropHandler(TextAlignClasses),
    textDecoration: createPropHandler(TextDecorationClasses),
    textOverflow: createPropHandler(TextOverflowClasses),
    textTransform: createPropHandler(TextTransformClasses),
    top: createPropHandler(TopClasses),
    verticalAlign: createPropHandler(VerticalAlignClasses),
    whiteSpace: createPropHandler(WhiteSpaceClasses),
    width: createPropHandler(WidthClasses),
    wordBreak: createPropHandler(WordBreakClasses),
    zIndex: createPropHandler(ZindexClasses)
};

/*
EXAMPLE:
    <Box
        backgroundColor="background-1"
        borderTopWidth={2}
        borderTopWidth={[2, 4, 8]}
        borderTopWidth={[2, "10px", 8]}
        borderTopColor="sunray-3"
    />
*/
export function useStyledSystem(props: Partial<StyleProps>) {
    return useMemo(() => {
        const { className, style, ...rest } = props;

        const context: Context = {
            classes: !isNil(className) ? [className] : [],
            style: style ?? {}
        };

        Object.entries(rest).forEach(([key, value]: Entry<StyleProps>) => {
            if (!isNil(value)) {
                const handler = PropsHandlers[key];

                if (!isNil(handler)) {
                    handler(key, value, context);
                } else {
                    context.style[key] = value;
                }
            }
        });

        return {
            className: context.classes.join(" "),
            style: context.style
        };
    }, [props]);
}
