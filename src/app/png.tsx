//import { Cartman } from '@/components/personagem';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useState } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';



export default function HomeScreen() {
const [top,setTop]=useState(100)

  return (

 <Pressable onPress={()=>{setTop((t)=> t+200)}}>
<Image source={require ('@/assets/images/jogo_png/Cartman.png')} style = {[{width: 100, height: 100, top, left: 70, position: 'absolute'}]}
  /></Pressable>

        





    
  );
}






const styles = StyleSheet.create({

Cartman:{
 width: 100, height: 100, top: Spacing.four, left: 70

},
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});


