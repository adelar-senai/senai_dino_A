import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { Platform } from 'react-native-reanimated/lib/typescript/ReanimatedModule/js-reanimated/JSReanimated';
function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  } 
  function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon name="logo" size={64} />
          <ThemedText type="hero">Expo Starter</ThemedText>
          <ThemedText type="subtitle">A minimal starter for Expo Router</ThemedText>
          <WebBadge />
        </ThemedView>  
        <AnimatedIcon name="arrow-down" size={32} style={styles.arrowDown} />
        <ThemedView style={styles.hintSection}>
          <HintRow label="Open dev menu" hint={getDevMenuHint()} /> 