import { A } from "@react-components/html";
import { Inline } from "@react-components/layout";
import { StyleProvider } from "@react-components/styling";
import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Html")
        .segment(segment)
        .parameters(paramsBuilder()
            .build())
        .build();
}

stories()
    .add("default", () =>
        <A href="#">Google</A>
    )
    .add("support style context", () => {
        const StyledAnchor = ({ children }) => {
            return (
                <StyleProvider
                    value={{
                        "html-a": {
                            color: "red"
                        }
                    }}
                >
                    <A href="#">{children}</A>
                </StyleProvider>
            );
        };

        return (
            <StyledAnchor>Google</StyledAnchor>
        );
    })
    .add("styling", () =>
        <Inline>
            <A border="sunray-10" href="#">Google</A>
            <A className="border-red" href="#">Google</A>
            <A style={{ border: "1px solid red" }} href="#">Google</A>
        </Inline>
    );
