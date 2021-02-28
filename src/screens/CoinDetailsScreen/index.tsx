import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import PercentageChange from '../../components/PercentageChange';
import styles from './styles';

const CoinDetailsScreen = () => {
  const [coinData, setCoinData] = useState({
    id: '1',
    name: 'Bitcoin',
    symbol: 'DH',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    currentPrice: 1523,
    valueChange1H: -1.12,
    valueChange1D: 3.12,
    valueChange7D: -5.12,
    amount: 15,
  });

  const onBuy = () => {};
  const onSell = () => {};

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.image} source={{ uri: coinData.image }} />
          <View>
            <Text style={styles.name}>{coinData.name}</Text>
            <Text style={styles.symbol}>{coinData.symbol}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <AntDesign name={'staro'} size={25} color={'#2f95dc'} />
        </View>
      </View>

      <View style={styles.currentPriceContainer}>
        <View>
          <Text style={styles.label}>Current Price</Text>
          <Text style={styles.value}>{coinData.currentPrice}</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 hour</Text>
            <PercentageChange value={coinData.valueChange1H} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>1 day</Text>
            <PercentageChange value={coinData.valueChange1D} />
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.label}>7 days</Text>
            <PercentageChange value={coinData.valueChange7D} />
          </View>
        </View>
      </View>

      <View style={styles.currentPriceContainer}>
        <Text>Position</Text>
        <Text>
          {coinData.amount} {coinData.symbol} (
          {coinData.currentPrice * coinData.amount} dhs)
        </Text>
      </View>

      <View style={[styles.currentPriceContainer, { marginTop: 'auto' }]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#20b100' }]}
          onPress={onBuy}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: '#ff0000' }]}
          onPress={onSell}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;
