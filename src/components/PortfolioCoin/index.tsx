import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';

export interface PortfolioCoinProps {
  portfolioCoin: {
    name: string;
    image: string;
    symbol: string;
    amount: number;
    valueDH?: number;
  };
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
  const navigation = useNavigation();
  const {
    portfolioCoin: { name, amount, image, symbol, valueDH },
  } = props;
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('CoinDetails')}
    >
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.value}>{valueDH} dhs</Text>
        <Text style={styles.symbol}>
          {symbol} {amount}
        </Text>
      </View>
    </Pressable>
  );
};

export default PortfolioCoin;
