import { useRef } from 'react';
import { Pressable, Animated } from 'react-native';

export default function HomeScreen() {
  const pulo = useRef(new Animated.Value(0)).current;

  return (
    <Pressable
      style={{ flex: 1 }}
      onPress={() => {
        Animated.sequence([
          Animated.timing(pulo, {
            toValue: -200,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(pulo, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      }}
    >
      <Animated.Image
        source={require('@/assets/images/jogo_png/Cartman.png')}
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          top: 300,
          left: 70,
          transform: [{ translateY: pulo }],
        }}
      />
    </Pressable>
  );
}