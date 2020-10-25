import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Colors from '../../constants/Colors';

export function AnimationExample() {
  let x = useRef(new Animated.Value(0)).current;
  let opacity = useRef(new Animated.Value(1)).current;

  // if you read the docs and you found multiply
  let y = Animated.multiply(x, 2);
  /*
    hacky (and worse) solution using interpolation if you don't read the docs 🙈
    let y = x.interpolate({
      inputRange: [0,300],
      outputRange: [0,600]
    })
    */

  // you can create a new animation for the opacity or interpolate the values
  // or we can interpolate it, just for fun 🏃
  // let opacity = x.interpolate({
  //   inputRange: [0, 300],
  //   outputRange: [1, 0]
  // });

  // 🤸‍♀️ Exercise 2
  useEffect(() => {
    Animated.timing(x, {
      duration: 2000,
      toValue: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacity, {
      duration: 2000,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        backgroundColor: Colors.light.tint,
        height: 100,
        width: 100,
        opacity,
        transform: [{ translateX: x }, { translateY: y }],
      }}
    />
  );
}
