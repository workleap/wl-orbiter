import { Box, BoxProps } from "../../box";
import { ComponentProps, ElementType, MouseEvent, ReactNode, SyntheticEvent, cloneElement, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    FocusScopeContext,
    InteractionProps,
    InternalProps,
    MergedRef,
    OmitInternalProps,
    StyledComponentProps,
    cssModule,
    isNil,
    isString,
    mergeProps,
    normalizeSize,
    useAutoFocusChild,
    useEventCallback,
    useFocusManager,
    useFocusScope,
    useId,
    useMergedRefs,
    useRefState,
    useResizeObserver,
    useSlots
} from "../../shared";
import { ResponsiveProp, useResponsiveValue } from "../../styling";
import { Underlay, useOverlayFocusRing, useOverlayLightDismiss, useRestoreFocus, useTrapFocus } from "../../overlay";

import { CrossButton } from "../../button";
import { Div } from "../../html";
import { Text } from "../../typography";
import { useDialogTriggerContext } from "./DialogTriggerContext";

export type AbstractDialogProps<T extends ElementType> = InternalProps & InteractionProps & Omit<StyledComponentProps<T>, "role" | "zIndex"> & {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the dialog should close on outside interactions.
     */
    dismissable?: boolean;
    /**
     * Additional props to render on the wrapper element.
     */
    wrapperProps?: Partial<BoxProps>;
    /**
     * The z-index of the dialog.
     */
    zIndex?: number;
};

const DefaultElement = "section";

export interface InnerDialogProps extends AbstractDialogProps<typeof DefaultElement> {
    /**
     * The dialog role.
     */
    role?: "dialog" | "alertdialog";
    /**
     * A dialog can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md" | "lg" | "fullscreen">;
}

function useHideBodyScrollbar() {
    const [stateRef, setState] = useRefState({
        isVisible: true,
        originalPosition: ""
    });

    useEffect(() => {
        if (stateRef.current.isVisible) {
            setState({
                isVisible: false,
                originalPosition: document.body.style.overflowY
            });

            document.body.style.overflowY = "hidden";
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const state = stateRef.current;

            if (!state.isVisible) {
                setState({
                    isVisible: true,
                    originalPosition: ""
                });

                document.body.style.overflowY = state.originalPosition;
            }
        };
    }, [stateRef, setState]);
}

function useElementHasVerticalScrollbar(): [MergedRef<HTMLElement>, boolean] {
    const [hasScrollbar, setHasScrollbar] = useState(false);
    const [elementRef, setElement] = useRefState<HTMLElement>();

    const handleElementResize = useEventCallback(() => {
        setHasScrollbar(elementRef.current.scrollHeight > elementRef.current.clientHeight);
    });

    const resizeRef = useResizeObserver(handleElementResize);

    return [
        useMergedRefs(setElement, resizeRef),
        hasScrollbar
    ];
}

function isElementInViewport(element: HTMLElement) {
    const clientRect = element.getBoundingClientRect();

    return (
        clientRect.top >= 0 &&
        clientRect.left >= 0 &&
        clientRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        clientRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export function InnerDialog({
    "aria-describedby": ariaDescribedBy,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    as = DefaultElement,
    children,
    dismissable = true,
    focus,
    forwardedRef,
    id,
    role = "dialog",
    size,
    wrapperProps,
    zIndex = 10000,
    ...rest
}: InnerDialogProps) {
    const sizeValue = useResponsiveValue(size);

    const [focusScope, setFocusRef] = useFocusScope();

    const wrapperRef = useRef<HTMLElement>();
    const dialogRef = useMergedRefs(forwardedRef, setFocusRef);
    const dismissButtonRef = useRef<HTMLButtonElement>();

    const { close, isOpen } = useDialogTriggerContext();

    useHideBodyScrollbar();

    const [hasVerticalScrollbarRef, wrapperHasVerticalScrollbar] = useElementHasVerticalScrollbar();

    const focusManager = useFocusManager(focusScope);

    useTrapFocus(focusManager);

    const restoreFocusProps = useRestoreFocus(focusScope);

    useAutoFocusChild(focusManager, {
        canFocus: useCallback((element: HTMLElement) => {
            // Do not autofocus the dialog itself.
            if (element === dialogRef.current) {
                return false;
            }

            // Do not autofocus the dismiss button.
            if (element === dismissButtonRef.current) {
                return false;
            }

            // Do not autofocus a link.
            if (element?.tagName === "A") {
                return false;
            }

            if (!isElementInViewport(element)) {
                return false;
            }

            return true;
        }, [dialogRef, dismissButtonRef]),
        onNotFound: useEventCallback(() => {
            dialogRef.current?.focus();
        })
    });

    const focusRingProps = useOverlayFocusRing({ focus });

    const overlayDismissProps = useOverlayLightDismiss(dialogRef, focusScope, {
        hideOnEscape: isOpen,
        hideOnLeave: false,
        hideOnOutsideClick: isOpen && dismissable,
        onHide: useEventCallback((event: SyntheticEvent) => {
            close(event);
        })
    });

    const handleDismissButtonClick = useEventCallback((event: MouseEvent) => {
        if (!isNil(close)) {
            close(event);
        }
    });

    const dialogId = useId(id, "o-ui-dialog");

    const { button, "button-group": buttonGroup, content, footer, header, heading, illustration, image } = useSlots(children, useMemo(() => ({
        _: {
            required: ["heading", "content"]
        },
        button: {
            className: "o-ui-dialog-button"
        },
        "button-group": {
            className: "o-ui-dialog-button-group"
        },
        content: {
            as: Text,
            className: "o-ui-dialog-content",
            id: `${dialogId}-content`
        },
        footer: {
            as: "footer",
            className: "o-ui-dialog-footer"
        },
        header: {
            as: "header",
            className: "o-ui-dialog-header"
        },
        heading: {
            as: "h3",
            className: "o-ui-dialog-heading",
            id: `${dialogId}-heading`,
            size: "sm"
        },
        illustration: {
            className: "o-ui-dialog-illustration",
            orientation: "vertical"
        },
        image: null
    }), [dialogId]));

    const headingId = heading?.props?.id;

    const contentId = content?.props?.id;

    const imageMarkup = image && (
        <Div className="o-ui-dialog-image">
            {image}
        </Div>
    );

    const headerMarkup = isString(header?.props?.children)
        ? cloneElement(header, { children: <Text>{header?.props?.children}</Text> })
        : header;

    const footerMarkup = isString(footer?.props?.children)
        ? cloneElement(footer, { children: <Text>{footer?.props?.children}</Text> })
        : footer;

    const dismissButtonMarkup = dismissable && (
        <CrossButton
            aria-label="Dismiss"
            className="o-ui-dialog-dismiss-button"
            condensed
            onClick={handleDismissButtonClick}
            ref={dismissButtonRef}
            size="xs"
        />
    );

    const headerSectionMarkup = (!isNil(heading) || !isNil(headerMarkup)) && (
        <Div className="o-ui-dialog-header-section">
            {heading}
            {headerMarkup}
        </Div>
    );

    const footerSectionMarkup = (!isNil(footerMarkup) || !isNil(button) || !isNil(buttonGroup)) && (
        <Div className="o-ui-dialog-footer-section">
            {footerMarkup}
            {button}
            {buttonGroup}
        </Div>
    );

    return (
        <FocusScopeContext.Provider value={{ scope: focusScope }}>
            <Underlay zIndex={zIndex} />
            <Div
                {...mergeProps(
                    wrapperProps ?? {},
                    {
                        className: cssModule(
                            "o-ui-dialog-wrapper",
                            wrapperHasVerticalScrollbar && "scrolling"
                        ),
                        ref: useMergedRefs(wrapperRef, hasVerticalScrollbarRef),
                        zIndex: zIndex + 1
                    }
                )}
            >
                <Box
                    {...mergeProps(
                        rest,
                        {
                            "aria-describedby": !isNil(ariaDescribedBy) ? ariaDescribedBy : contentId ?? undefined,
                            "aria-label": ariaLabel,
                            "aria-labelledby": isNil(ariaLabel) ? ariaLabelledBy ?? headingId : undefined,
                            "aria-modal": true,
                            as,
                            className: cssModule(
                                "o-ui-dialog",
                                sizeValue === "fullscreen" ? sizeValue : normalizeSize(sizeValue),
                                focus && "focus"
                            ),
                            id: dialogId,
                            ref: dialogRef,
                            role,
                            tabIndex: -1
                        },
                        overlayDismissProps,
                        focusRingProps,
                        restoreFocusProps
                    )}
                >
                    {dismissButtonMarkup}
                    {imageMarkup}
                    {illustration}
                    <Div className="o-ui-dialog-aside">
                        {headerSectionMarkup}
                        {content}
                        {footerSectionMarkup}
                    </Div>
                </Box>
            </Div>
        </FocusScopeContext.Provider>
    );
}

InnerDialog.defaultElement = DefaultElement;

export const Dialog = forwardRef<any, OmitInternalProps<InnerDialogProps>>((props, ref) => (
    <InnerDialog {...props} forwardedRef={ref} />
));

export type DialogProps = ComponentProps<typeof Dialog>;
