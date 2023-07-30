# react-navigation
React Native Navigation(Stack, Drawer, Switch, Bottom)

```
yarn add @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack
```
Drawer Navigator
```
yarn add @react-navigation/drawer
npx expo install react-native-gesture-handler react-native-reanimated
```
Configure for React reanimated
or visit `https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation`
add this to babel.config.js
```
  plugins: [
        ...
        [
            'react-native-reanimated/plugin', {
                relativeSourceLocation: true,
            },
        ]
    ],

  yarn start --reset-cache
```