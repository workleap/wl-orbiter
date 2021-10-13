import {
    AlignContentProp,
    AlignItemsProp,
    ColumnGapProp,
    FlexBasisProp,
    FlexDirectionProp,
    FlexWrapProp,
    GapProp,
    JustifyContentProp,
    RowGapProp,
    useResponsiveValue
} from "../../styling";
import { Box } from "../../box";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, SlotProps, StyledComponentProps, isNil, mergeProps } from "../../shared";

export type FlexOrientation = "horizontal" | "vertical";
export type FlexDirection = "row" | "column";
export type FlexAlignment = "start" | "end" | "center";

export interface UseFlexAlignmentProps {
    alignX?: FlexAlignment;
    alignY?: FlexAlignment;
    orientation: FlexOrientation;
}

export function useFlexAlignment({ alignX, alignY, orientation }: UseFlexAlignmentProps) {
    return orientation === "horizontal"
        ? {
            alignItems: alignY,
            direction: "row" as FlexDirection,
            justifyContent: alignX
        }
        : {
            alignItems: alignX,
            direction: "column" as FlexDirection,
            justifyContent: alignY
        };
}

const DefaultElement = "div";

export type SafeAlignItemsProp = Omit<AlignItemsProp, "flex-start" | "flex-end">;

export type SafeJustifyContentProp = Omit<JustifyContentProp, "flex-start" | "flex-end">;

export interface InnerFlexProps extends
    // Keep it so it could be used with dynamic slots.
    SlotProps,
    InternalProps,
    Omit<StyledComponentProps<typeof DefaultElement>,
    "alignContent"
    | "alignItems"
    | "columnGap"
    | "display"
    | "flex"
    | "flexBasis"
    | "flexDirection"
    | "flexWrap"
    | "gap"
    | "justifyContent"
    | "rowGap"
    | "wrap"> {
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
     */
    alignContent?: AlignContentProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
     */
    alignItems?: SafeAlignItemsProp;
    /**
     * Alias for [flex basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis);
     */
    basis?: FlexBasisProp;
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap).
     */
    columnGap?: ColumnGapProp;
    /**
     * Alias for [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).
     */
    direction?: FlexDirection;
    /**
     * Whether the elements take up all the space of their container.
     */
    fluid?: boolean;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
     */
    gap?: GapProp;
    /**
     * Whether or not the element generate line breaks before or after himself.
     */
    inline?: boolean;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
     */
    justifyContent?: SafeJustifyContentProp;
    /**
     * Whether or not to reverse the order of the elements.
     */
    reverse?: boolean;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap).
     */
    rowGap?: RowGapProp;
    /**
     * Alias for [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).
     */
    wrap?: FlexWrapProp;
}

export function InnerFlex({
    alignItems,
    as = DefaultElement,
    children,
    direction = "row",
    fluid,
    forwardedRef,
    height,
    inline,
    justifyContent,
    reverse,
    width,
    wrap,
    ...rest
}: InnerFlexProps) {
    const alignItemsValue = useResponsiveValue(alignItems);
    const directionValue = useResponsiveValue(direction);
    const justifyContentValue = useResponsiveValue(justifyContent);

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    // Normalize values until Chrome support `start` & `end`, https://developer.mozilla.org/en-US/docs/Web/CSS/align-items.
                    alignItems: (alignItemsValue && (alignItemsValue as string).replace("start", "flex-start").replace("end", "flex-end")) as AlignItemsProp,
                    as,
                    display: inline ? "inline-flex" as const : "flex" as const,
                    flexDirection: (directionValue ? `${directionValue}${reverse ? "-reverse" : ""}` : undefined) as FlexDirectionProp,
                    flexWrap: wrap,
                    height: !isNil(height) ? height : (fluid && directionValue === "column" ? "100%" : undefined),
                    justifyContent: (justifyContentValue && (justifyContentValue as string).replace("start", "flex-start").replace("end", "flex-end")) as JustifyContentProp,
                    ref: forwardedRef,
                    width: !isNil(width) ? width : (fluid && directionValue === "row" ? "100%" : undefined)
                }
            )}
        >
            {children}
        </Box>
    );
}

export const Flex = forwardRef<any, OmitInternalProps<InnerFlexProps>>((props, ref) => (
    <InnerFlex {...props} forwardedRef={ref} />
));

export type FlexProps = ComponentProps<typeof Flex>;
