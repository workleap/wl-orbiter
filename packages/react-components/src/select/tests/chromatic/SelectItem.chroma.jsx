import { CalendarIcon } from "@react-components/icons";
import { Select } from "@react-components/select";
import { createChromaticSection, paramsBuilder, storiesOfBuilder } from "@utils";

function stories(segment) {
    return storiesOfBuilder(module, createChromaticSection("Select/item"))
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .canvasLayout({ width: "80%" })
            .build())
        .build();
}

const MALE_ITEM = {
    key: "Male",
    text: "Male",
    value: "Male"
};

const FEMALE_ITEM = {
    key: "Female",
    text: "Female",
    value: "Female"
};

function SimpleSelect({ options = [MALE_ITEM, FEMALE_ITEM], ...rest }) {
    return (
        <Select
            {...rest}
            options={options}
        />
    );
}

stories()
    .add("default", () =>
        <div className="flex flex-column">
            <div style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    size="small"
                    open
                />
            </div>
            <div style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    open
                />
            </div>
            <div>
                <SimpleSelect
                    size="large"
                    open
                />
            </div>
        </div>
    )
    .add("active", () =>
        <div className="flex flex-column">
            <div style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, active: true }]}
                    size="small"
                    open
                />
            </div>
            <div style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, active: true }]}
                    open
                />
            </div>
            <div>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, active: true }]}
                    size="large"
                    open
                />
            </div>
        </div>
    )
    .add("selected", () =>
        <div className="flex flex-column">
            <div style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, selected: true }]}
                    size="small"
                    open
                />
            </div>
            <div style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, selected: true }]}
                    open
                />
            </div>
            <div>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, selected: true }]}
                    size="large"
                    open
                />
            </div>
        </div>
    )
    .add("disabled", () =>
        <div className="flex flex-column">
            <div style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, disabled: true }]}
                    size="small"
                    open
                />
            </div>
            <div style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, disabled: true }]}
                    open
                />
            </div>
            <div>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, disabled: true }]}
                    size="large"
                    open
                />
            </div>
        </div>
    )
    .add("description", () =>
        <div className="flex flex-column">
            <div style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, description: "To infinite and beyond!" }]}
                    size="small"
                    open
                />
            </div>
            <div style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, description: "To infinite and beyond!" }]}
                    open
                />
            </div>
            <div>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, description: "To infinite and beyond!" }]}
                    size="large"
                    open
                />
            </div>
        </div>
    )
    .add("icons left", () =>
        <div className="flex flex-column">
            <div className="flex" style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: <CalendarIcon /> }]}
                    size="small"
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />] }]}
                    size="small"
                    open
                />
            </div>
            <div className="flex" style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: <CalendarIcon /> }]}
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />] }]}
                    open
                />
            </div>
            <div className="flex" style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: <CalendarIcon /> }]}
                    size="large"
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />] }]}
                    size="large"
                    open
                />
            </div>
            <div className="flex">
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />], disabled: true }]}
                    open
                />
            </div>
        </div>
    )
    .add("icon right", () =>
        <div className="flex flex-column">
            <div className="flex" style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: <CalendarIcon />, iconsPosition: "right" }]}
                    size="small"
                    fluid
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />], iconsPosition: "right" }]}
                    size="small"
                    fluid
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, description: "To infinite and beyond!", icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />], iconsPosition: "right" }]}
                    size="small"
                    fluid
                    open
                />
            </div>
            <div className="flex" style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: <CalendarIcon />, iconsPosition: "right" }]}
                    fluid
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />], iconsPosition: "right" }]}
                    fluid
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, description: "To infinite and beyond!", icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />], iconsPosition: "right" }]}
                    fluid
                    open
                />
            </div>
            <div className="flex" style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: <CalendarIcon />, iconsPosition: "right" }]}
                    size="large"
                    fluid
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />], iconsPosition: "right" }]}
                    size="large"
                    fluid
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, description: "To infinite and beyond!", icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />], iconsPosition: "right" }]}
                    size="large"
                    fluid
                    open
                />
            </div>
            <div className="flex">
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, icons: [<CalendarIcon />, <CalendarIcon />, <CalendarIcon />], disabled: true, iconsPosition: "right" }]}
                    open
                />
            </div>
        </div>
    )
    .add("avatar", () =>
        <div className="flex flex-column">
            <div className="flex" style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[{ ...MALE_ITEM, avatar: { src: "https://randomuser.me/api/portraits/men/14.jpg", alt: "Male" } }, { ...FEMALE_ITEM, avatar: { src: "https://randomuser.me/api/portraits/women/14.jpg", alt: "Female" } }]}
                    size="small"
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[{ ...MALE_ITEM, avatar: <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="Male" /> }, { ...FEMALE_ITEM, avatar: <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="Female" /> }]}
                    size="small"
                    open
                />
            </div>
            <div className="flex" style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[{ ...MALE_ITEM, avatar: { src: "https://randomuser.me/api/portraits/men/14.jpg", alt: "Male" } }, { ...FEMALE_ITEM, avatar: { src: "https://randomuser.me/api/portraits/women/14.jpg", alt: "Female" } }]}
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[{ ...MALE_ITEM, avatar: <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="Male" /> }, { ...FEMALE_ITEM, avatar: <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="Female" /> }]}
                    open
                />
            </div>
            <div className="flex" style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[{ ...MALE_ITEM, avatar: { src: "https://randomuser.me/api/portraits/men/14.jpg", alt: "Male" } }, { ...FEMALE_ITEM, avatar: { src: "https://randomuser.me/api/portraits/women/14.jpg", alt: "Female" } }]}
                    size="large"
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[{ ...MALE_ITEM, avatar: <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="Male" /> }, { ...FEMALE_ITEM, avatar: <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="Female" /> }]}
                    size="large"
                    open
                />
            </div>
            <div className="flex">
                <SimpleSelect
                    options={[{ ...MALE_ITEM, avatar: <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="Male" />, disabled: true }, { ...FEMALE_ITEM, avatar: <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="Female" />, disabled: true }]}
                    open
                />
            </div>
        </div>
    )
    .add("overflow", () =>
        <div className="flex" style={{ marginBottom: "150px" }}>
            <SimpleSelect
                options={[MALE_ITEM, { ...FEMALE_ITEM, text: "Super long text that will not fit without overflowing" }]}
                open
                wrapperClassName="mr5"
            />
            <SimpleSelect
                options={[MALE_ITEM, { ...FEMALE_ITEM, description: "Super long text that will not fit without overflowing" }]}
                open
            />
        </div>
    )
    .add("styling", () =>
        <div className="flex">
            <div className="flex" style={{ marginBottom: "150px" }}>
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, className: "bg-red" }]}
                    open
                    wrapperClassName="mr5"
                />
                <SimpleSelect
                    options={[MALE_ITEM, { ...FEMALE_ITEM, style: { background: "red" } }]}
                    open
                />
            </div>
        </div>
    );
