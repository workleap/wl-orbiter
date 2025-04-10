import { AbstractInputProps } from "../../input/index.ts";
import { Box } from "../../box/index.ts";
import { Span } from "../../html/index.ts";
import { ChangeEvent, ChangeEventHandler, ComponentProps, ReactNode, forwardRef, useMemo } from "react";
import { OmitInternalProps, isNil, mergeProps, omitProps, resolveChildren, useChainedEventCallback, useSlots } from "../../shared/index.ts";
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.ts";
import { Text } from "../../typography/index.ts";
import { VisuallyHidden } from "../../visually-hidden/index.ts";
import { useCheckbox } from "../../checkbox/index.ts";
import { useFieldInputProps } from "../../field/index.ts";
import { useToolbarProps } from "../../toolbar/index.ts";

const DefaultElement = "label";

export interface InnerSwitchProps extends Omit<AbstractInputProps<typeof DefaultElement>, "onChange"> {
    /**
     * A controlled checked state value.
     */
    checked?: boolean | null;
    /**
     * React children.
     */
    children?: ReactNode;
    /**
     * The initial value of `checked` when uncontrolled.
     */
    defaultChecked?: boolean;
    /**
     * @ignore
     */
    disabled?: boolean;
    /**
     * @ignore
     */
    name?: string;
    /**
     * Called when the switch checked state change.
     * @param {ChangeEvent} event - React's original synthetic event.
     * @returns {void}
     */
    onChange?: ChangeEventHandler;
    /**
     * Called when the switch checked state change.
     * @param {ChangeEvent} event - React's original synthetic event.
     * @param {boolean} isChecked - Whether or not the input is checked.
     * @returns {void}
     */
    onValueChange?: (event: ChangeEvent<HTMLInputElement>, isChecked: boolean) => void;
    /**
     * Invert the order the checkmark box and the label.
     */
    reverse?: boolean;
    /**
     * A checkbox can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md">;
}

export function InnerSwitch(props: InnerSwitchProps) {
    const [toolbarProps] = useToolbarProps();
    const [fieldProps, isInField] = useFieldInputProps();

    const {
        active,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        as = DefaultElement,
        autoFocus,
        checked,
        children,
        defaultChecked,
        disabled,
        focus,
        forwardedRef,
        hover,
        id,
        name,
        onChange,
        onValueChange,
        required,
        reverse,
        size,
        tabIndex,
        validationState,
        ...rest
    } = mergeProps(
        props,
        omitProps(toolbarProps, ["orientation"]),
        omitProps(fieldProps, ["fluid"])
    );

    if (isNil(children) && isNil(ariaLabel) && isNil(ariaLabelledBy)) {
        console.error("A switch must either have children, an \"aria-label\" attribute or an \"aria-labelledby\" attribute.");
    }

    const sizeValue = useResponsiveValue(size);

    const handleChange = useChainedEventCallback(onChange, (event: ChangeEvent<HTMLInputElement>, isChecked: boolean) => {
        if (!isNil(onValueChange)) {
            onValueChange(event, isChecked);
        }
    });

    const { inputProps, wrapperProps } = useCheckbox({
        active,
        ariaLabel,
        ariaLabelledBy,
        autoFocus,
        checked,
        cssModule: "o-ui-switch",
        defaultChecked,
        disabled,
        focus,
        forwardedRef,
        hover,
        id,
        isInField,
        name,
        onChange: handleChange,
        required,
        reverse,
        size: sizeValue,
        tabIndex,
        validationState
    });

    const content = resolveChildren(children);

    const { counter, icon, text } = useSlots(content, useMemo(() => ({
        _: {
            defaultWrapper: Text
        },
        counter: {
            className: "o-ui-switch-counter",
            color: "inherit",
            pushed: true,
            reverse,
            size: sizeValue,
            variant: "divider"
        },
        icon: {
            className: "o-ui-switch-icon",
            size: sizeValue
        },
        text: {
            className: "o-ui-switch-label",
            color: "inherit",
            size: sizeValue
        }
    }), [sizeValue, reverse]));

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as
                },
                wrapperProps
            )}
        >
            <VisuallyHidden
                {...inputProps}
                role="switch"
            />
            <Span className="o-ui-switch-control" />
            {text}
            {icon}
            {counter}
        </Box>
    );
}

InnerSwitch.defaultElement = DefaultElement;

/**
 * A switch offers an on or off choice to a user.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/switch--default-story)
*/
export const Switch = forwardRef<any, OmitInternalProps<InnerSwitchProps>>((props, ref) => (
    <InnerSwitch {...props} forwardedRef={ref} />
));

export type SwitchProps = ComponentProps<typeof Switch>;
