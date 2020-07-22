import { ToggleButton } from "@react-components/button";
import { useState } from "react";

export function ControlledToggleButton() {
    const [isChecked, setIsChecked] = useState(false);

    console.log(isChecked);

    return (
        <ToggleButton
            checked={isChecked}
            value="isActive"
            color={isChecked ? "primary" : undefined}
            onChange={() => { setIsChecked(x => !x); }}
        >
            {isChecked ? "On" : "Off"}
        </ToggleButton>
    );
}
