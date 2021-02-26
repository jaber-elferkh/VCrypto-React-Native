import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MarketCoin from '../../components/MarketCoin';
import styles from './styles';
const image = require('../../../assets/images/Saly-31.png');

const MarketCoins = [
  {
    id: '1',
    name: 'Dirham',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'DH',
    valueChange24H: -3,
    valueDH: 1523,
  },
  {
    id: '2',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'USD',
    valueChange24H: 842,
    valueDH: 842,
  },
  {
    id: '3',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'USD',
    valueChange24H: -50,
    valueDH: 842,
  },
  {
    id: '4',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'USD',
    valueChange24H: 842,
    valueDH: 842,
  },
];

const MarketScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: '100%' }}
        data={MarketCoins}
        renderItem={({ item }) => <MarketCoin marketCoin={item} />}
        ListHeaderComponentStyle={{
          alignItems: 'center',
          // flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Market</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default MarketScreen;
