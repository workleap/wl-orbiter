import "./Image.css";

import { Box } from "../../box";
import { ComponentProps, ElementType, ForwardedRef } from "react";
import { HeightProp, StyleProps, WidthProp, cssModule, forwardRef, mergeProps, slot } from "../../shared";

export interface InnerImageProps extends StyleProps {
    /**
     * The path to the image.
     */
    src?: string;
    /**
     * One or more strings separated by commas, indicating possible image sources for the user agent to use. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset).
     */
    srcSet?: string;
    /**
     * A text description of the image.
     */
    alt: string;
    /**
     * Width and height in a single value.
     */
    size?: string;
    /**
     * The image shape.
     */
    shape?: "straight" | "rounded" | "circular";
    /**
     * How the image should be resized to fit its container. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
     */
    fit?: "contain" | "cover" | "fill" | "scale-down" | "none";
    // /**
    //  * The alignment of the image within it's box. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position).
    //  */
    // position?: string;
    /**
     * Default slot override.
     */
    slot?: string;
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as?: ElementType;
    /**
    * @ignore
    */
    forwardedRef: ForwardedRef<any>;
}

export function InnerImage({
    shape = "straight",
    size,
    width,
    height,
    fit,
    position,
    as = "img",
    forwardedRef,
    ...rest
}: InnerImageProps) {
    return (
        <Box
            {...mergeProps(
                rest,
                {
                    width: (width ?? size) as WidthProp,
                    height: (height ?? size) as HeightProp,
                    className: cssModule(
                        "o-ui-image",
                        shape
                    ),
                    style: {
                        objectFit: fit,
                        objectPosition: position
                    },
                    as,
                    ref: forwardedRef
                }
            )}
        />
    );
}

export const Image = slot("image", forwardRef<InnerImageProps>((props, ref) => (
    <InnerImage {...props} forwardedRef={ref} />
)));

export type ImageProps = ComponentProps<typeof Image>;
