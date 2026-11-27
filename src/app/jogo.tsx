import { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing,  Pressable, View } from 'react-native';
import { Image } from 'expo-image';

const { width: LARGURA_TELA } = Dimensions.get('window');






const INIMIGO_W = 100;
const INIMIGO_RIGHT = 70;
const INIMIGO_X_INICIAL = LARGURA_TELA - INIMIGO_RIGHT - INIMIGO_W;

export default function Jogo() {
  const pulo = useRef(new Animated.Value(0)).current;
  const pulando = useRef(false);
  const inimigo = useRef(new Animated.Value(0)).current;
  const [gameOver , setGaveOver] = useState (false)
  const cartmanPos = useRef({ x: 70, y: 350 });
  const inimigoPos = useRef({ x: INIMIGO_X_INICIAL, y: 350 });  

  

  useEffect(() => {
    const idPulo = pulo.addListener(({ value }) => {
      cartmanPos.current.y = 350 + value;
      verificarColisao()
    });

    const idInimigo = inimigo.addListener(({ value }) => {
      inimigoPos.current.x = INIMIGO_X_INICIAL + value;
verificarColisao()

    });

      moverInimigo();

    return () => {
      pulo.removeListener(idPulo);
      inimigo.removeListener(idInimigo);
      inimigo.stopAnimation();
    };
  }, []);



  function moverInimigo() {
  inimigo.setValue(0);
  Animated.timing(inimigo, {
    toValue: -(INIMIGO_X_INICIAL + INIMIGO_W),
    duration: 2500,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start(({ finished }) => {
    if (finished) moverInimigo();
  });
}


function verificarColisao (){
  const bateu =
  
    cartmanPos.current.x < inimigoPos.current.x + INIMIGO_W &&
    cartmanPos.current.x + 100 > inimigoPos.current.x &&
    cartmanPos.current.y < inimigoPos.current.y + 100 &&
    cartmanPos.current.y + 100 > inimigoPos.current.y;

     if (bateu) {
    setGaveOver(true);
     }
}


 


  function pular() {
    if (pulando.current) return;
    pulando.current = true;
    Animated.sequence([
      Animated.timing(pulo, {
        toValue: -250,
        duration: 450,
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




      {/* Cartman */}
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
          width: INIMIGO_W,
          height: 100,
          position: 'absolute',
          top: 350,
          left: INIMIGO_X_INICIAL,
          transform: [{ translateX: inimigo }],
        }}
      />
       {gameOver && (
  <Image
    source={require('@/assets/images/jogo_png/tela-de-morte.png')}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    
       }}
    contentFit="cover"
  
  />
  )}
  </Pressable>


  
      
  );
}