import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export interface RankingUserProps {
  rankingUser: {
    name: string;
    image: string;
    netWorth?: number;
  };
  place: number;
}

const RankingUser = (props: RankingUserProps) => {
  const {
    rankingUser: { name, image, netWorth },
    place,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.place}>{place}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.value}>{netWorth} dhs</Text>
      </View>
    </View>
  );
};

export default RankingUser;
