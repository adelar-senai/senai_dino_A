import { useRef } from 'react';
import { Pressable, Animated, View } from 'react-native';

export default function Jogo() {
  const pulo = useRef(new Animated.Value(0)).current;
  const pulando = useRef(false);
  const inimigo = useRef(new Animated.Value(0)).current;

  function pular() {
    if (pulando.current) return;
    pulando.current = true;

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
    ]).start(() => {
      pulando.current = false;
    });
  }

  return (
    <Pressable style={{ flex: 1 }} onPress={pular}>
      {/* Chão */}
      <View
        style={{
          position: 'absolute',
          top: 450,
          left: 0,
          right: 0,
          height: 2,
          backgroundColor: 'black',
        }}
      />
      {/* Personagem */}
      <Animated.Image
        source={require('@/assets/images/jogo_png/Cartman.png')}
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          top: 350,
          left: 70,
          transform: [{ translateY: pulo }],
        }}
      />
      {/* Inimigo movimento */}
      <Animated.View
      source={require('@/assets/images/jogo_png/alien.png')}
      style={{
         width: 100,
          height: 100,
          position: 'absolute',
          top: 350,
          left: 70,

      }}
      />
    </Pressable>
  );
}

