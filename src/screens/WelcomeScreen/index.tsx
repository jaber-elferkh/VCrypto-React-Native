import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './style';
const image = require('../../../assets/images/Saly-1.png');
const googleButton = require('../../../assets/images/google-Button.png');

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const signInGoogle = () => {
    navigation.navigate('Root');
  };

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header}>Welcome to VCrypto</Text>
      <Text style={styles.paragraph}>
        Invest your 1000dh and your can get back more
      </Text>
      <Pressable onPress={signInGoogle} style={styles.googleButton}>
        <Image style={styles.buttonImage} source={googleButton} />
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
