# @pankod/refine-mantine

## 1.7.0

### Minor Changes

-   [#2839](https://github.com/refinedev/refine/pull/2839) [`5388a338ab`](https://github.com/refinedev/refine/commit/5388a338abb9a5e03599da0a2786bea394cbc516) Thanks [@aliemir](https://github.com/aliemir)! - **Deprecation**

    `ignoreAccessControlProvider` prop on buttons is deprecated. Use `accessContro.enabled` instead.

    **Features**

    `accessControl.enabled` prop is added to buttons to enable/disable access control for buttons.
    `accessControl.hideIfUnauthorized` prop is added to buttons to hide the button if access is denied.

-   [#2836](https://github.com/refinedev/refine/pull/2836) [`e43e9a17ae`](https://github.com/refinedev/refine/commit/e43e9a17ae0ed41e649b8026b2b04d850136dcfd) Thanks [@alicanerdurmaz](https://github.com/alicanerdurmaz)! - added locales prop to date fields

### Patch Changes

-   [#2838](https://github.com/refinedev/refine/pull/2838) [`f7968fa16f`](https://github.com/refinedev/refine/commit/f7968fa16f9930442e1122fe5294e350252bdd5c) Thanks [@aliemir](https://github.com/aliemir)! - Fixed #2828 - Buttons were not respecting access control when navigating to a new page. Now, if button is disabled, it will not also block the navigation not just the onClick event.

-   [#2818](https://github.com/refinedev/refine/pull/2818) [`295fc2f773`](https://github.com/refinedev/refine/commit/295fc2f7735c05101a5dba24e3ebd73039ebd317) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Added missing `Title` component export.

-   Updated dependencies [[`476285e342`](https://github.com/refinedev/refine/commit/476285e3427c7e065892a281da529c038aee83d2), [`5388a338ab`](https://github.com/refinedev/refine/commit/5388a338abb9a5e03599da0a2786bea394cbc516), [`e43e9a17ae`](https://github.com/refinedev/refine/commit/e43e9a17ae0ed41e649b8026b2b04d850136dcfd)]:
    -   @pankod/refine-ui-types@0.12.0

## 1.6.13

### Patch Changes

-   -   Updated the default false icon for the BooleanField component to be a cross instead of a minus.
    -   Updated the TextField export name to be "TextField" instead of "TextFieldComponent".
    -   Fixed the tsdoc links for the field components.

## 1.6.12

### Patch Changes

-   [#2799](https://github.com/refinedev/refine/pull/2799) [`78b61da700`](https://github.com/refinedev/refine/commit/78b61da700ad0ee68e538c69746ddb6ed8378df8) Thanks [@salihozdemir](https://github.com/salihozdemir)! - - Updated the default false icon for the BooleanField component to be a cross instead of a minus.
    -   Updated the TextField export name to be "TextField" instead of "TextFieldComponent".
    -   Fixed the tsdoc links for the field components.

## 1.6.11

### Patch Changes

-   Add primary color to `<SaveButton/>`'s `<ActionIcon/>` component.

## 1.6.10

### Patch Changes

-   [#2758](https://github.com/refinedev/refine/pull/2758) [`3960549907`](https://github.com/refinedev/refine/commit/39605499074d73a75d73f8bfce03088f63915027) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Add primary color to `<SaveButton/>`'s `<ActionIcon/>` component.

## 1.6.9

### Patch Changes

-   Fixed incorrectly used hooks in AuthPage component

## 1.6.8

### Patch Changes

-   [#2769](https://github.com/refinedev/refine/pull/2769) [`501aebe997`](https://github.com/refinedev/refine/commit/501aebe9974520c30093cc9cec781ee58129d053) Thanks [@dgelineau](https://github.com/dgelineau)! - Fixed incorrectly used hooks in AuthPage component

## 1.6.7

### Patch Changes

-   Fixed <ErrorComponent /> responsive design for mobile devices

## 1.6.6

### Patch Changes

-   [#2748](https://github.com/refinedev/refine/pull/2748) [`0eaddb65ee`](https://github.com/refinedev/refine/commit/0eaddb65ee77777fd1e6b9e5501c18d69bef4be8) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Fixed <ErrorComponent /> responsive design for mobile devices

## 1.6.5

### Patch Changes

-   -   Added `<LoadingOverlay />` component to basic view components.
    -   Update `goBack` prop usage, now it can be passed to `<ActionButton />`'s children.
    -   Fixed the issue that when `title` prop is passed to basic views, the back button is not shown.
    -   Default title size decreased from `h2` to `h3`.
-   Updated dependencies []:
    -   @pankod/refine-ui-types@0.11.4

## 1.6.4

### Patch Changes

-   [#2718](https://github.com/refinedev/refine/pull/2718) [`d78d2a2a99`](https://github.com/refinedev/refine/commit/d78d2a2a99adb508094069cda23deaba55c25b63) Thanks [@salihozdemir](https://github.com/salihozdemir)! - - Added `<LoadingOverlay />` component to basic view components.
    -   Update `goBack` prop usage, now it can be passed to `<ActionButton />`'s children.
    -   Fixed the issue that when `title` prop is passed to basic views, the back button is not shown.
    -   Default title size decreased from `h2` to `h3`.
-   Updated dependencies [[`d78d2a2a99`](https://github.com/refinedev/refine/commit/d78d2a2a99adb508094069cda23deaba55c25b63)]:
    -   @pankod/refine-ui-types@0.11.3

## 1.6.3

### Patch Changes

-   Fixed `providers` property empty array state in `<AuthPage />` component

## 1.6.2

### Patch Changes

-   Fixed `providers` property empty array state in `<AuthPage />` component

## 1.6.1

### Patch Changes

-   [#2712](https://github.com/refinedev/refine/pull/2712) [`c434055011`](https://github.com/refinedev/refine/commit/c434055011cbdd846c9f228c23987607bb828a1b) Thanks [@omeraplak](https://github.com/omeraplak)! - Fixed `providers` property empty array state in `<AuthPage />` component

## 1.6.0

### Minor Changes

-   Updated `formProps` property on `<AuthPage />` component

### Patch Changes

-   Added `clearable` prop to `useSelect` hook that is `true` by default.

## 1.5.0

### Minor Changes

-   [#2663](https://github.com/refinedev/refine/pull/2663) [`c624a52b23`](https://github.com/refinedev/refine/commit/c624a52b2310db1349ec556a7671f23779cc3622) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - Updated `formProps` property on `<AuthPage />` component

### Patch Changes

-   [#2701](https://github.com/refinedev/refine/pull/2701) [`ddd9eb3aff`](https://github.com/refinedev/refine/commit/ddd9eb3aff961fcedf354f2c77c1844131d713a1) Thanks [@salihozdemir](https://github.com/salihozdemir)! - Added `clearable` prop to `useSelect` hook that is `true` by default.

## 1.4.0

### Minor Changes

-   -   Added new <AuthPage /> component core and mantine support.
    -   Move Auth types `@pankod/refine-ui-types` to `@pankod/refine-core`

## 1.3.0

### Minor Changes

-   [#2627](https://github.com/refinedev/refine/pull/2627) [`c5fb45d61f`](https://github.com/refinedev/refine/commit/c5fb45d61fa7470a7a34762ad19d17e9f87e4421) Thanks [@yildirayunlu](https://github.com/yildirayunlu)! - - Added new <AuthPage /> component core and mantine support.
    -   Move Auth types `@pankod/refine-ui-types` to `@pankod/refine-core`

## 1.2.0

### Minor Changes

-   First release of `@pankod/refine-mantine` 🎉

## 1.1.0

### Minor Changes

-   [#2505](https://github.com/refinedev/refine/pull/2505) [`a4dbb63c88`](https://github.com/refinedev/refine/commit/a4dbb63c881a83e5146829130b1377e791b44469) Thanks [@salihozdemir](https://github.com/salihozdemir)! - First release of `@pankod/refine-mantine` 🎉

## 1.0.6

### Patch Changes

-   Updated dependencies []:
    -   @pankod/refine-ui-types@0.11.0

## 1.0.5

### Patch Changes

-   Updated dependencies [[`a65525de6f`](https://github.com/refinedev/refine/commit/a65525de6f995babfca1058e933cdbea67d6032e)]:
    -   @pankod/refine-ui-types@0.10.0

## 1.0.4

### Patch Changes

-   Updated dependencies []:
    -   @pankod/refine-ui-types@0.9.0

## 1.0.3

### Patch Changes

-   Updated dependencies [[`ad99916d6d`](https://github.com/refinedev/refine/commit/ad99916d6dbd181b857fd7df7b9619d8cac5e3e0)]:
    -   @pankod/refine-ui-types@0.8.0

## 1.0.2

### Patch Changes

-   Fixed version of react-router to `6.3.0`

-   Updated dependencies []:
    -   @pankod/refine-ui-types@0.7.0

## 1.0.1

### Patch Changes

-   [#2501](https://github.com/refinedev/refine/pull/2501) [`4095a578d4`](https://github.com/refinedev/refine/commit/4095a578d471254ee58412f130ac5a0f3a62880f) Thanks [@omeraplak](https://github.com/omeraplak)! - Fixed version of react-router to `6.3.0`
