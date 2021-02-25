import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
const image = require('../../../assets/images/Saly-1.png');

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <Text style={styles.header}>Welcome to VCrypto</Text>
      <Text style={styles.paragraph}>
        Invest your 1000dh and your can get back more
      </Text>
    </View>
  );
};

export default HomeScreen;
