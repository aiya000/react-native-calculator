# :gift: react-native-calculator :gift:

This is an example project for

- `react-native` + `TypeScript`
- `jest` + `TypeScript`

## Requirements

- [yarn](https://yarnpkg.com/lang/ja/)
- [watchexec](https://github.com/watchexec/watchexec) (if you want to use `yarn run watch`)
    - TODO: Use tsc `--watch` instead

## First

Install dependencies

```shell-session
$ yarn
```

## Build the app and the test

```shell-session
$ yarn clean  # optional
$ yarn build
```

## Run the app for Android/iOS

1. Start/Connect an Android/iOS simulator/device on your PC
2. :point_down:

```shell-session
$ yarn run start
$ yarn run android  # or 'ios'
```

## Run the test

```shell-session
$ yarn run test
```

## Others

```shell-session
$ yarn run repl  # TypeScript REPL
$ yarn run watch # To build when a .ts, .tsx, .json or .lock updated
```
