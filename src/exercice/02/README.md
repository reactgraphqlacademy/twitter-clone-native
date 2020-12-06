# React Native Navigation

## Learning objectives

- Understand how routing works on mobile application

## 🥑 Before we start the exercise

- There are others routing solutions available, keep in mind we are using the `react-navigation` library
- We are using `react-navigation v5.x.x` (Be carreful when you random copy/paste Stack Overflow)

## 🤸‍♀️ Exercise 1

- [ ] Create a Stack Navigator in `src/exercice/02/PublicNavigator.tsx` that shows the `LoginScreen` and the `TermsScreen`

**Hint:** You can read the [stack-navigator documentation](https://reactnavigation.org/docs/stack-navigator/)

- [ ] Use `LOGIN_SCREEN` and `TERMS_SCREEN` from `AppRoute`as route names to maintain consistency when navigating

- [ ] Update the entry point of your application. Wrap your `PublicStack` with `NavigationContainer` using the Stack Navigator from `src/final/02/PublicNavigator.tsx`

**Hint:** If you are lost you can debug the changes on the `NavigationContainer` with `onStateChange={state => console.log('New state is', state)}`

- [ ] Add some options to the `Navigator`

```javascript
headerMode={'none'}
mode={'modal'}
initialRouteName={AppRoute.LOGIN_SCREEN}
```

- [ ] Add a `goBack` behavior on `TermsScreen.tsx`

## 🤸‍♀️ Exercise 2 Styling

- [ ] We have an issue of the color on the Terms Screen. How can we fix the color od the header?

## 🤸‍♀️ Exercise 3 Passing data throught screens

Go to `src/exercice/01/TimelineScreen.tsx`:

- [ ] The header title for this view should be `Timeline`
- [ ] 1.2. Implement the `handleTweetPress` method to send the user to the `TWEET_DETAIL_SCREEN` screen, passing the `id` as a parameter.

Hint: [https://reactnavigation.org/docs/navigation-prop/#navigate](https://reactnavigation.org/docs/navigation-prop/#navigate)

Go to `src/Screens/TweetDetailScreen.tsx`

- [ ] Set the header title for this view should be `Tweet`
- [ ] Implement the `handleProfilePress` method to send the user to the `USER_PROFILE` screen, passing the parameters below:

```javascript
  {
    userId: this.state.tweet.user.id_str,
    name: this.state.tweet.user.screen_name
  }
```

## 🤸‍♀️ Exercise 4 Authentication

- [ ] Add an Authentication flow to your application

You can read the documentation [https://reactnavigation.org/docs/auth-flow](https://reactnavigation.org/docs/auth-flow)
_Hint:_ For now you can emulate the token with a simple `useState`. Later we will see how to use `AsyncStorage` to keep the token on the phone.

### 🏋️‍♀️ Bonus `createBottomTabNavigator`

Create a `BottomTabNavigator` and use it as `PrivateNavigator` for your app. This will be an extra layer on your app. the entry point for your Private Section.

- [ ] Create a `PrivateNavigator` file to start with.
- [ ] Change `options` to the tab and use `tabBarLabel` and `tabBarIcon`
- [ ] The two tabs should be the `MAIN_TIMELINE_SCREEN` that loads the already created `TimelineNavigator`, and the `MY_PROFILE` route that will render the `ProfileScreen` with the "user's data".
- [ ] `ProfileScreen` expects some paramenters in order to load the user's data. you need when the user "presses"
      the tab, you need to pass the correct parameters from the current logged user (now hardcoded). Hint: [https://reactnavigation.org/docs/bottom-tab-navigator/](https://reactnavigation.org/docs/bottom-tab-navigator/)

- [ ] Add a custom icon for an active plain icon and outline icons for the rest
      Hint: [https://reactnavigation.org/docs/en/tab-based-navigation.html#customizing-the-appearance](https://reactnavigation.org/docs/en/tab-based-navigation.html#customizing-the-appearance)

## 🏅 Elaboration and Feedback

<div>
<span>After the exercice, if you want to remember what you've just learned, then </span>
<a rel="noopener noreferrer" target="_blank" href="https://airtable.com/shrBuZqOJL5UeLLF1?prefill_Name=React+Native+Navigation&prefill_Exercice=2">
  fill out the elaboration and feedback form.
</a>
</div>
