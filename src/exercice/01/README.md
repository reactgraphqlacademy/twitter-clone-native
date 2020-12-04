# React Native Foundations

## Learning objectives

- Use a real device to feel the "React Native way of working"™️
- Discover [React Native Core Components and APIs](https://reactnative.dev/docs/components-and-apis)
- Using a third part component library

## 🥑 Before we start the exercise

- You should have an `https://expo.io` account
- Download the expo application on your phone
- `react-native-paper` is already included by default in Snack.

## 🤸‍♀️ Exercise 1

We are going to start by creating the Login screen. You can [download a bigger image here](./login.PNG).

![Login Screen](./login-sm.PNG)

- [ ] Go to [Expo Snack](https://snack.expo.io) and create the Screen from Scratch
- [ ] Use the `TextInput` component
- [ ] Use the `Button` component

### 🏋️‍♀️ Bonus

- [ ] Create your custom `TextInput` and `Button` component

## 🤸‍♀️ Exercise 2

- [ ] Paste your LoginScreen from the exercice 1 Snack into `src/exercice/01/LoginScreen.tsx`
- [ ] Got to `App.tsx` and change the screen from `LoginScreen` to `TermsScreen`.
- [ ] There is a bug in `src/exercice/01/TermsScreen.tsx`, it can't display all the content. You need to change the View so it has scroll.

Nice! We've got our first view with a scroll.
Next it's going to use a more performant scroll for long lists.

- [ ] Got to `App.tsx` and change the screen from `TermsScreen` to `TimelineScreen`.
- [ ] Go to `src/exercice/01/TimelineScreen.tsx` and implement a `FlatList` for the data that is fetched.

### 🏋️‍♀️ Bonus

You can use the following icons [https://docs.expo.io/guides/icons/](https://docs.expo.io/guides/icons/)

- [ ] Add likes and retweets to each tweet in the `FlatList`.