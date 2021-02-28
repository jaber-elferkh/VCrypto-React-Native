import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
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
  const navigation = useNavigation();
  const {
    marketCoin: { name, valueChange24H, image, symbol, valueDH },
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
        <PercentageChange value={valueChange24H} />
      </View>
    </Pressable>
  );
};

export default MarketCoin;
