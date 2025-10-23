# @workleap/orbiter-ui

## 5.6.13

### Patch Changes

- 83e66c3: Bump to test OIDC publish

## 5.6.12

### Patch Changes

- c90cd1a: Bump to test OIDC publish

## 5.6.11

### Patch Changes

- c70d8bd: Update colors for button upsell
- a239151: Fix fields to prevent conflict between focus and hover state

## 5.6.10

### Patch Changes

- 119728e: Fix some issues with the NewTabIndicator, we should show it when a link is external and user-select should always be none.

## 5.6.9

### Patch Changes

- bb38001: Add missing value to --o-ui-focus-ring-outset-outer-offset

## 5.6.8

### Patch Changes

- 862f504: Fix a bug where a small checkbox would have the wrong size when unchecked

## 5.6.7

### Patch Changes

- 98511b7: Replace element.ref with element.props.ref for React 19 compatibility

## 5.6.6

### Patch Changes

- e223174: properly export core.css file

## 5.6.5

### Patch Changes

- e27d26a: Hopper UI and react aria components are now properly put as peer dependencies.

## 5.6.4

### Patch Changes

- ed2772e: Small change to css imports

## 5.6.3

### Patch Changes

- 2bab529: Prevent listbox and menu icon/avatar from shrinking

## 5.6.2

### Patch Changes

- 618eb39: Added sideEffects field to projects

## 5.6.1

### Patch Changes

- 5c289b4: Fix release pipelines
- 023377e: Fix storybook config webpack

## 5.6.0

### Minor Changes

- 7740d3c: The codebase has been converted to ESM from CommonJS. There should be no changes to codebases using Orbiter, but the treeshaking should be better.

## 5.5.0

### Minor Changes

- 7bc64199f: Converted the code back to ESM in order to fix import paths issues

## 5.4.0

### Minor Changes

- cdb78b27b: Updated the disclosureArrow size to match Hopper / Listbox options hover state fix

## 5.3.0

### Minor Changes

- 140b20eba: Output is now proper ESM format
- 4a8c84283: Add support for SSR in Node.js

## 5.2.0

### Minor Changes

- 404fbba13: Updated to latest hopper tokens

## 5.1.0

### Minor Changes

- ad53ef35c: Added status tokens to match Hopper / updated some values for status tokens

## 5.0.3

### Patch Changes

- dfea2e24c: Tag / Lozenge and Badge font size match with Hopper

## 5.0.2

### Patch Changes

- d1c95e372: Added -active tokens back before deprecating them for compatibility issues
- 1cc5d4ebc: Color of tertiary button is now matching Hopper

## 5.0.0

### Major Changes

- a4be2bf6e: Renamed active color styledProps to press - Added new tokens and updated some

  **Added**

  | Token - Text       |
  | ------------------ |
  | danger-selected    |
  | danger-weak-hover  |
  | danger-weak-press  |
  | neutral-weak-hover |
  | neutral-weak-press |
  | primary-selected   |
  | upsell-selected    |
  | upsell-weak        |
  | upsell-weak-hover  |
  | upsell-weak-press  |

  | Token - Border   |
  | ---------------- |
  | danger-selected  |
  | neutral-selected |
  | primary-selected |
  | upsell-selected  |

  | Token - Icon         |
  | -------------------- |
  | danger-selected      |
  | danger-weak-hover    |
  | danger-weak-press    |
  | neutral-selected     |
  | neutral-strong-hover |
  | neutral-weak-press   |
  | primary-selected     |
  | upsell-selected      |
  | upsell-hover         |
  | upsell-weak-hover    |
  | upsell-weak-press    |

  | Token - BackgroundColor       |
  | ----------------------------- |
  | danger-selected               |
  | danger-weak-hover             |
  | danger-weak-press             |
  | decorative-option5-weak-hover |
  | neutral-weak-selected         |
  | neutral-weakest-selected      |
  | neutral-selected              |
  | primary-selected              |
  | primary-strong-selected       |
  | primary-weak-hover            |
  | primary-weak-press            |
  | upsell-selected               |
  | upsell-weak-hover             |
  | upsell-weak-press             |

  **Renamed**

  Use this as a reference to fix all breaking changes.

  Text

  | Old Token name | New Token name |
  | -------------- | -------------- |
  | danger-active  | danger-press   |
  | neutral-active | neutral-press  |
  | primary-active | primary-press  |
  | upsell-active  | upsell-press   |

  Border
  | Old Token name | New Token name |
  |-----------------|-----------------------------|
  | danger-active | danger-press |
  | neutral-active | neutral-press |
  | primary-active | primary-press |
  | upsell-active | upsell-press |

  Icon
  | Old Token name | New Token name |
  |-----------------|-------------------|
  | danger-active | danger-press |
  | neutral-active | neutral-press |
  | primary-active | primary-press |
  | upsell-active | upsell-press |

  BackgroundColor
  | Old Token name | New Token name |
  |-----------------|-----------------------------|
  | danger-active | danger-press |
  | neutral-active | neutral-press |
  | neutral-weak-active | neutral-weak-press |
  | primary-active | primary-press |
  | primary-strong-active | primary-strong-press |
  | upsell-active | upsell-press |

  **Updated**

  | Token - BackgroundColor |
  | ----------------------- |
  | danger-hover            |
  | danger-strong           |
  | danger-strong-hover     |
  | primary-strong-hover    |
  | primary-hover           |
  | upsell-hover            |
  | upsell-weak             |

  | Token - Text         |
  | -------------------- |
  | danger-text-weak     |
  | status-progress-text |
  | primary-text         |
  | upsell-text          |
  | upsell-text-hover    |

  | Token - Icon    |
  | --------------- |
  | status-progress |
  | upsell          |

## 4.2.3

### Patch Changes

- d203870ea: Added pressed states and active states to buttons / updated fields focus states

## 4.2.2

### Patch Changes

- a5b632082: Updated dependency on Hopper - fixed breaking changes caused by Hopper, see [https://github.com/workleap/wl-hopper/pull/261](https://github.com/workleap/wl-hopper/pull/261)

## 4.2.1

### Patch Changes

- 04900c01b: Fixed a typing issue when using a size on Autocomplete

## 4.2.0

### Minor Changes

- a64e9fd79: Updated Fluid button behaviour regarding icon and counter

## 4.1.1

### Patch Changes

- 6cfd22898: Fix focus size in Firefox

## 4.1.0

### Minor Changes

- 27ec1d00b: Added a 2xl variant to Avatar

## 4.0.1

### Patch Changes

- 9ddb577c8: Avatar Initials color is now the right one

## 4.0.0

### Major Changes

- 6dddca86e: - Alert is now dismissable by default. This is potentially a breaking change if you we're not expecting the alert to be closable. To fix this, either add `dismissable={false}` to the Alert, or handle the `onClose` event handler.

  - Dialog small size has been slightly reduced by 84px.

## 3.3.0

### Minor Changes

- c11b045e1: Added support for size prop on TextInput / SearchInput and PasswordInput

## 3.2.7

### Patch Changes

- 2f178cc61: Exported types that were not being exported (ButtonVariant, ToggleButtonVariant, LinkVariant and TileOrientation)

## 3.2.6

### Patch Changes

- 49d0798e1: Modify the Typescript typings for the as function

## 3.2.5

### Patch Changes

- 47b07b656: Internal changes.

## 3.2.3

### Patch Changes

- c5c13d67c: Add tag slot to the tag component

## 3.2.2

### Patch Changes

- 573db6381: Update documentation links in component's jsdoc
- ba32d933b: Fixed intellisence for border-radius, font-family and line-height in the styled system

## 3.2.1

### Patch Changes

- a9762fcd0: Add slot "toolbar" to the toolbar component

## 3.2.0

### Minor Changes

- c98d16e00: Removed the "as" prop from the ThemeProvider. The ThemeProvider now creates 1 wrapping div instead of 2.

## 3.1.1

### Patch Changes

- 381a9c55d: Added object-fit cover to avatars in order to fit image that aren't square

## 3.1.0

### Minor Changes

- fa1814550: - Fixed TextArea doesn't honor the rows property
  - Fixed NumberInput component does not trigger onValueChange on Blur with null Value
  - Fixed Conflict between HTML table border property and Styled System border property in Table component
  - Fixed Switches don't handle the fluid props passed by the Form, resulting in forwarding fluid to a DOM element that doesn't accept the property
  - Removed console.log that were accidentally released

## 3.0.3

### Patch Changes

- 92915be6a: Tile Component follows Hopper design

## 3.0.2

### Patch Changes

- 1e24525e9: DialogTrigger's zIndex default value has been bumped from 1 to 10000 to better reflect the expected zIndex value of Dialogs
- 1ec1ed454: XS Avatar design update: only one letter is now shown as per design.

## 3.0.1

### Patch Changes

- 2d4001fb9: Fixed input and textarea text size

## 3.0.0

### Major Changes

- 4ecec6d48: - All icons have been moved to the `@hopper-ui/icons` package.

  - Icons used in orbiter components have been replaced with the new ones.
  - Icons used to be 20x20, now they are either 16x16, 24x24 or 32x32. When using a Hopper icon inside an orbiter component, you do not need to change anything. The orbiter component will automatically scale the icon to the correct size.

  ## BREAKING CHANGES

  - All icons have been moved to the `@hopper-ui/icons` package.

    - All imports needs to be updated to `@hopper-ui/icons`.
    - Since we are completely swapping the icon set, most of the icon names have changed. You can find the new names in the [icon documentation](https://hopper.workleap.design/icons/react-icons/library).

  - `createIcon` from the `@hopper-ui/icons` package now requires 4 parameters instead of 1. The 16x16 icon source, the 24x24 icon source, the 32x32 icon source and the icon name.

## 2.2.2

### Patch Changes

- 388522eeb: Added missing token for neutral surface active color.

## 2.2.1

### Patch Changes

- 6781a7049: Fix for heading small line height token
- a4f2cc02e: Token update

## 2.2.0

### Minor Changes

- bf02c00dd: Added:

  - fontFamily is now available on all components that use the style system
  - Added a list of all available semantic values for the styled-system in the tokens page

  Update:

  - Tokens are now updated with their latest value. No breaking changes to be expected
  - Semantic elevation tokens are now working correctly

## 2.1.0

### Minor Changes

- 7af49cfa6: Added 'standalone', 'in-card' and 'heading variants to Tabs.

## 2.0.0

### Major Changes

- 69375f1cb: Initial Release of Orbiter

### Patch Changes

- Updated dependencies [69375f1cb]
  - @orbit-ui/transition-icons@2.0.0
