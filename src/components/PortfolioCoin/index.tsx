import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export interface PortfolioCoinProps {
  portfolioCoin: {
    name: String;
    image: String;
    symbol: String;
    amount: Number;
    valueDH?: Number;
  };
}

const PortfolioCoin = (props: PortfolioCoinProps) => {
  const {
    portfolioCoin: { name, amount, image, symbol, valueDH },
  } = props;
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default PortfolioCoin;
