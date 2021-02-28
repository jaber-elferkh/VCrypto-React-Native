import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
const image = require('../../../assets/images/Saly-31.png');

const CoinExchangeScreen = () => {
  const route = useRoute();

  const [coinAmount, setCoinAmount] = useState('');
  const [coinDHValue, setCoinDHValue] = useState('');

  const maxDH = 100000;

  const isBuy = route?.params?.isBuy;
  const coinData = route?.params?.coinData;

  useEffect(() => {
    const amount = parseFloat(coinAmount);

    if (!amount && amount !== 0) {
      setCoinAmount('');
      setCoinDHValue('');
      return;
    }
    setCoinDHValue((amount * coinData?.currentPrice).toString());
  }, [coinAmount]);

  useEffect(() => {
    const amount = parseFloat(coinDHValue);

    if (!amount && amount !== 0) {
      setCoinAmount('');
      setCoinDHValue('');
      return;
    }
    setCoinAmount((amount / coinData?.currentPrice).toString());
  }, [coinDHValue]);

  const placeOrder = () => {
    if (isBuy && parseFloat(coinDHValue) > maxDH) {
      Alert.alert('Error', `Not enough DH coins, Max: ${maxDH}`);
      return;
    }

    if (!isBuy && parseFloat(coinAmount) > coinData.amount) {
      Alert.alert(
        'Error',
        `Not enough ${coinData.symbol} coins, Max: ${coinData.amount}`
      );
      return;
    }
  };

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <KeyboardAvoidingView style={styles.root}>
      <Text style={styles.title}>
        {isBuy ? 'Buy ' : 'Sell '}
        {coinData?.name}
      </Text>
      <Text
        style={styles.subtitle}
      >{`1 ${coinData?.symbol} = ${coinData?.currentPrice} dhs`}</Text>
      <Image source={image} style={styles.image} />

      <View style={styles.inputs}>
        <View style={styles.input}>
          <TextInput
            keyboardType="decimal-pad"
            value={coinAmount}
            onChangeText={setCoinAmount}
            placeholder="0"
          />
          <Text>{coinData?.symbol}</Text>
        </View>
        <Text style={{ fontSize: 30 }}>=</Text>
        <View style={styles.input}>
          <TextInput
            keyboardType="decimal-pad"
            value={coinDHValue}
            onChangeText={setCoinDHValue}
            placeholder="0"
          />
          <Text>DH</Text>
        </View>
      </View>

      <Pressable style={styles.button} onPress={placeOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default CoinExchangeScreen;
