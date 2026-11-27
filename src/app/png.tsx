import { useRef, useEffect } from 'react';
import {
  Pressable,
  Animated,
  View,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Jogo() {
  const pulo = useRef(new Animated.Value(0)).current;
  const pulando = useRef(false);
  const inimigo = useRef(new Animated.Value(0)).current;

  function moverInimigo() {
    inimigo.setValue(0);

    Animated.timing(inimigo, {
      toValue: -(width + 100),
      duration: 1500 + Math.random() * 1500,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) moverInimigo();
    });
  }

  useEffect(() => {
    moverInimigo();
    return () => inimigo.stopAnimation();
  }, []);

  function pular() {
    if (pulando.current) return;
    pulando.current = true;

    Animated.sequence([
      Animated.timing(pulo, { toValue: -240, duration: 250, useNativeDriver: true }),
      Animated.timing(pulo, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start(() => {
      pulando.current = false;
    });
  }

  return (
    <ImageBackground
      source={require('@/assets/images/jogo_png/background_casa.png')}
      style={{ width:1670, height:900 }}
      resizeMode="cover"
    >
      <Pressable style={{ flex: 1 }} onPress={pular}>
        
        {/* Score */}
        <Text style={{ position: 'absolute', top: 50, left: 20, fontSize: 24, fontWeight: 'bold' }}>
          SCORE: 0
        </Text>

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

        {/* Inimigo */}
        <Animated.Image
          source={require('@/assets/images/jogo_png/alien.png')}
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            top: 350,
            right: -100,
            transform: [{ translateX: inimigo }],
          }}
        />
      </Pressable>
    </ImageBackground>
  );
}