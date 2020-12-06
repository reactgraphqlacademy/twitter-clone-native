# React Native Animations

## Learning objectives

- Do some basic Animations
- Use an animation library from AirBnB called Lottie

## 🥑 Before we start the exercise

- You can have a look at the [React Natvice Animated API](https://reactnative.dev/docs/animated)
- At some point you will need to use the `useNativeDriver` option

## 🤸‍♀️ Exercise 1

Go to `src/exercice/03/AnimationExample.tsx` and do the following tasks:

- [ ] Animate the View so it moves on the Y axis 200 units
- [ ] Animate the `opacity` of the View so it goes from 1 to 0.
      **Hint:** you need to interpolate the animated value.

## 🤸‍♀️ Exercise 2

- [ ] Animate the View with a `useEffect`
- [ ] It moves on the Y axis twice what it does on the X axis.
- [ ] The opacity of the View should go from 0 to 1
- [ ] The duration for all the animations should be 2 seconds.

## 🤸‍♀️ Exercise 3

Let's create the [Twitter user profile on scroll animation](https://vimeo.com/473089632).

Go to `src/exercice/01/ProfileScreen.tsx` and do the following tasks:

- [ ] Replace the `scrollY = 1;` at the top of the ProfileScreen class with an animated value (initial value 1)
- [ ] Add an [Animated.event](https://reactnative.dev/docs/animated#handling-gestures-and-other-events) for the on scroll event in the ScrollView
- [ ] We are using the Y axis `y: this.scrollY` for the animation

- [ ] Animate the cover image adding the following opacity:

  - When the scroll is 0 then the opacity is 1
  - When the scroll is 125 then the opacity is 0

- [ ] Animate the View that wrapps the TopBar component so it has the following opacity:

  - When the scroll is 0 then the opacity is 0
  - When the scroll is 100 then the opacity is 0.1
  - When the scroll is 125 then the opacity is 1

- [ ] Use [useNativeDriver:true](https://reactnative.dev/docs/animated#using-the-native-driver) in the configuration of the animation.

## 🤸‍♀️ Exercise 4

- [ ] Animate the Avatar so when the user scrolls down and the Avatar gets smaller the center of the Avatar stays in the same position.

### 🏋️‍♀️ Bonus Lottie Library

- [ ] Create a new Screen `src/exercice/03/Confetti.tsx`
- [ ] Install [Lottie](https://docs.expo.io/versions/latest/sdk/lottie/) with `expo install`
- [ ] import the confetti animation file `src/exercice/03/confetti.json` or use one from [https://lottiefiles.com/featured](https://lottiefiles.com/featured)
- [ ] Add a `<LottieView>`

## 🏅 Elaboration and Feedback

<div>
<span>After the exercice, if you want to remember what you've just learned, then </span>
<a rel="noopener noreferrer" target="_blank" href="https://airtable.com/shrBuZqOJL5UeLLF1?prefill_Name=React+Native+Animations&prefill_Exercice=3">
  fill out the elaboration and feedback form.
</a>
</div>
