import CustomButton from '../components/Button';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/components/imagen/image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Imagen de fondo */}
      <Image source={PlaceholderImage} style={StyleSheet.absoluteFillObject} />

      {/* Contenido encima de la imagen */}
      <View style={styles.content}>
        <CustomButton label="Inicio" onPress={() => alert('¡Botón presionado!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

