import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PortfolioCoin from '../../components/PortfolioCoin';
import styles from './styles';
const image = require('../../../assets/images/Saly-10.png');

const PortfolioCoins = [
  {
    id: '1',
    name: 'Dirham',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'DH',
    amount: 1523,
    valueDH: 1523,
  },
  {
    id: '2',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'USD',
    amount: 842,
    valueDH: 842,
  },
  {
    id: '3',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'USD',
    amount: 842,
    valueDH: 842,
  },
  {
    id: '4',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'USD',
    amount: 842,
    valueDH: 842,
  },
  {
    id: '5',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'USD',
    amount: 842,
    valueDH: 842,
  },
  {
    id: '6',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'USD',
    amount: 842,
    valueDH: 842,
  },
  {
    id: '7',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'USD',
    amount: 842,
    valueDH: 842,
  },
  {
    id: '8',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    symbol: 'USD',
    amount: 842,
    valueDH: 842,
  },
];

const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: '100%' }}
        data={PortfolioCoins}
        renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
        ListHeaderComponentStyle={{
          alignItems: 'center',
          // flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Portfolio Balance</Text>
              <Text style={styles.balance}>158,000 dh</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
