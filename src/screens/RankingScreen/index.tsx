import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import RankingUser from '../../components/RankingUser';
import styles from './styles';
const image = require('../../../assets/images/Saly-20.png');

const MarketCoins = [
  {
    id: '1',
    name: 'Dirham',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    netWorth: 1523,
  },
  {
    id: '2',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    netWorth: 842,
  },
  {
    id: '3',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    netWorth: 842,
  },
  {
    id: '4',
    name: 'Dollar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
    netWorth: 842,
  },
];

const RankingsScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: '100%' }}
        data={MarketCoins}
        renderItem={({ item, index }) => (
          <RankingUser rankingUser={item} place={index} />
        )}
        ListHeaderComponentStyle={{
          alignItems: 'center',
          // flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Rankings</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default RankingsScreen;
