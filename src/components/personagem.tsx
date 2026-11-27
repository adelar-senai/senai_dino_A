import { Image, StyleSheet } from 'react-native';


 export function Cartman () {
 return <Image source={require ('@/assets/images/jogo_png/Cartman.png')} style = {styles.Cartman} />;
}  
          

const Styles = StyleSheet.create({
Cartman:{
 width: 100, height: 100, top: 300, left: 70

},
});
