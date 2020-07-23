import { Checkbox } from "@react-components/checkbox";
import { act, render, waitFor } from "@testing-library/react";
import { createRef } from "react";
import { waitDelay } from "@utils/wait-delay";
import userEvent from "@utils/user-event";

function getInput(element) {
    return element.querySelector("input");
}

// ***** Behaviors *****

test("when autofocus is true, the checkbox is autofocused on render", async () => {
    const { getByTestId } = render(
        <Checkbox autofocus />
    );

    await waitFor(() => expect(getInput(getByTestId("checkbox"))).toHaveFocus());
});

test("when autofocus on a disabled checkbox, the checkbox is not autofocused on render", async () => {
    const { getByTestId } = render(
        <Checkbox
            disabled
            autofocus
        />
    );

    expect(getInput(getByTestId("checkbox"))).not.toHaveFocus();
});

test("when delayed autofocus, the checkbox is autofocused after the delay", async () => {
    const { getByTestId } = render(
        <Checkbox
            autofocus
            autofocusDelay={50}
        />
    );

    // Required for the JavaScript scheduler to run the autofocus code since it's in a setTimeout.
    await waitDelay(0);

    expect(getInput(getByTestId("checkbox"))).not.toHaveFocus();

    await waitFor(() => expect(getInput(getByTestId("checkbox"))).toHaveFocus());
});

test("when delayed autofocus on a disabled checkbox, the checkbox is not autofocused after the delay", async () => {
    const { getByTestId } = render(
        <Checkbox
            disabled
            autofocus
            autofocusDelay={50}
        />
    );

    await waitDelay(60);

    expect(getInput(getByTestId("checkbox"))).not.toHaveFocus();
});

// ***** API *****

test("call onChange when the checkbox is checked", async () => {
    const handler = jest.fn();

    const { getByTestId } = render(
        <Checkbox onChange={handler} />
    );

    act(() => {
        userEvent.click(getInput(getByTestId("checkbox")));
    });

    expect(handler).toHaveBeenLastCalledWith(expect.anything());
});

test("call onChange when the checkbox is unchecked", async () => {
    const handler = jest.fn();

    const { getByTestId } = render(
        <Checkbox onChange={handler} />
    );

    act(() => {
        userEvent.click(getInput(getByTestId("checkbox")));
    });

    act(() => {
        userEvent.click(getInput(getByTestId("checkbox")));
    });

    expect(handler).toHaveBeenLastCalledWith(expect.anything());
});

test("call onChange when the checkbox goes from indeterminate to checked", async () => {
    const handler = jest.fn();

    const { getByTestId } = render(
        <Checkbox defaultIndeterminate onChange={handler} />
    );

    act(() => {
        userEvent.click(getInput(getByTestId("checkbox")));
    });

    expect(handler).toHaveBeenLastCalledWith(expect.anything());
});

test("dont call onChange when the checkbox is disabled", async () => {
    const handler = jest.fn();

    const { getByTestId } = render(
        <Checkbox disabled onChange={handler} />
    );

    act(() => {
        userEvent.click(getInput(getByTestId("checkbox")));
    });

    expect(handler).not.toHaveBeenCalled();
});

test("dont call onChange when the checkbox is readonly", async () => {
    const handler = jest.fn();

    const { getByTestId } = render(
        <Checkbox readOnly onChange={handler} />
    );

    act(() => {
        userEvent.click(getInput(getByTestId("checkbox")));
    });

    expect(handler).not.toHaveBeenCalled();
});

test("can focus the checkbox with the focus api", async () => {
    let refNode = null;

    render(
        <Checkbox
            ref={node => {
                refNode = node;
            }}
        />
    );

    act(() => {
        refNode.focus();
    });

    await waitFor(() => expect(getInput(refNode)).toHaveFocus());
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef();

    render(
        <Checkbox ref={ref} />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("LABEL");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode = null;

    render(
        <Checkbox
            ref={node => {
                refNode = node;
            }}
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("LABEL");
});

test("set ref once", async () => {
    const handler = jest.fn();

    render(
        <Checkbox ref={handler} />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
