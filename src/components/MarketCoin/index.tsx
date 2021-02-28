import React from 'react';
import { View, Text, Image } from 'react-native';
import PercentageChange from '../PercentageChange';
import styles from './styles';

export interface MarketCoinProps {
  marketCoin: {
    name: string;
    image: string;
    symbol: string;
    valueChange24H: number;
    valueDH?: number;
  };
}

const MarketCoin = (props: MarketCoinProps) => {
  const {
    marketCoin: { name, valueChange24H, image, symbol, valueDH },
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
        <PercentageChange value={valueChange24H} />
        {/* <Text style={{ color: valueChange24H > 0 ? 'green' : 'red' }}>
          {valueChange24H > 0 && '+'}
          {valueChange24H}
        </Text> */}
      </View>
    </View>
  );
};

export default MarketCoin;
