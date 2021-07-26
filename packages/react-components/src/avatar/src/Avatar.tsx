import "./Avatar.css";

import { AriaLabelingProps, createSizeAdapter, cssModule, forwardRef, isNil, isNilOrEmpty, isString, mergeProps, normalizeSize, slot } from "../../shared";
import { AsyncImage } from "../../image";
import { Box } from "../../box";
import { ComponentProps, ElementType, ForwardedRef, ReactNode, useMemo } from "react";
import { Text } from "../../typography";

export interface InnerAvatarProps extends AriaLabelingProps {
    /**
     * The name of the person in the avatar.
     */
    name: string;
    /**
     * The url of a remote image or an image object.
     */
    src?: string | ReactNode;
    /**
     * The allowed number of retry to load a remote image.
     */
    retryCount?: number;
    /**
     * An avatar can vary in size.
     */
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as?: ElementType;
    /**
     * Default slot override.
     */
    slot?: string;
    /**
     * @ignore
     */
    forwardedRef: ForwardedRef<any>;
}

function AvatarImage({
    name,
    src,
    retryCount,
    size,
    "aria-label": ariaLabel
}: Partial<AvatarProps>) {
    if (!isString(src)) {
        return (
            // @ts-ignore
            <img src={src} alt={name} className="o-ui-avatar-image" />
        );
    }

    return (
        <AsyncImage
            src={src}
            alt={name}
            retryCount={retryCount}
            className="o-ui-avatar-image"
        >
            <AvatarInitials
                name={name}
                size={size}
                aria-label={ariaLabel}
            />
        </AsyncImage>
    );
}

const O365InitialsColorsForName = [
    "#99B433",
    "#6BA5E7",
    "#E773BD",
    "#00A300",
    "#1E7145",
    "#FF0097",
    "#7E3878",
    "#603CBA",
    "#5E4B8B",
    "#00ABA9",
    "#2D89EF",
    "#2B5797",
    "#DA532C",
    "#B91D47"
];

function AvatarInitials({ name, size, "aria-label": ariaLabel }: Partial<AvatarProps>) {
    const initials = useMemo(() => {
        const cleanName = name.replace(/\s+/g, " ").trim();

        const [firstName, lastName] = cleanName.split(" ");

        return !isNil(firstName) && !isNil(lastName)
            ? `${firstName.charAt(0)}${lastName.charAt(0)}`
            : firstName.charAt(0);
    }, [name]);

    const color = useMemo(() => {
        let hashCode = 0;

        for (let i = name.length - 1; i >= 0; i--) {
            const character = name.charCodeAt(i);
            const shift = i % 8;

            hashCode ^= (character << shift) + (character >> (8 - shift));
        }

        return O365InitialsColorsForName[hashCode % O365InitialsColorsForName.length];
    }, [name]);

    return (
        <AvatarText
            size={size}
            style={{
                backgroundColor: color
            }}
            role="img"
            aria-label={ariaLabel ?? name}
        >
            {initials}
        </AvatarText>
    );
}

export type AvatarTextProps = Partial<AvatarProps> & {
    children: ReactNode;
};

const textSize = createSizeAdapter({
    "2xs": "xs",
    "xs": "xs",
    "sm": "sm",
    "md": "md",
    "lg": "lg",
    "xl": "xl",
    "2xl": "2xl"
});

export function AvatarText({
    size,
    as = "span",
    children,
    ...rest
}: AvatarTextProps) {
    return (
        <Text
            {...mergeProps<any>(
                rest,
                {
                    size: textSize(size),
                    className: "o-ui-avatar-text",
                    as
                }
            )}
        >
            {children}
        </Text>
    );
}

export function InnerAvatar({
    name,
    src,
    retryCount,
    size,
    "aria-label": ariaLabel,
    as = "div",
    forwardedRef,
    ...rest
}: InnerAvatarProps) {
    const content = !isNilOrEmpty(src)
        ? (
            <AvatarImage
                name={name}
                src={src}
                retryCount={retryCount}
                size={size}
                aria-label={ariaLabel}
            />
        ) : (
            <AvatarInitials
                name={name}
                size={size}
                aria-label={ariaLabel}
            />
        );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    className: cssModule(
                        "o-ui-avatar",
                        normalizeSize(size)
                    ),
                    as,
                    ref: forwardedRef
                }
            )}
        >
            {content}
        </Box>
    );
}

export const Avatar = slot("avatar", forwardRef<InnerAvatarProps>((props, ref) => (
    <InnerAvatar {...props} forwardedRef={ref} />
)));

export type AvatarProps = ComponentProps<typeof Avatar>;

Avatar.displayName = "Avatar";

