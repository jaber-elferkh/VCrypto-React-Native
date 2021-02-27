import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
const image = require('../../../assets/images/Saly-10.png');

const ProfileScreen = () => {
  const [user, setUser] = useState({
    id: '1',
    name: 'Jaber El-Ferkh',
    email: 'elferkhjaber@gmail.com',
    netWorth: 1503,
    image:
      'https://cdn.dribbble.com/users/4188520/avatars/normal/9900dca40da904199c378fc64ed92c87.jpg?1580805196',
  });

  const signOut = () => {
    console.warn('Sign Out');
  };

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={image} />
      <View style={{ width: '100%' }}>
        <View style={styles.userContainer}>
          <View style={styles.leftContainer}>
            <Image style={styles.userImage} source={{ uri: user.image }} />
            <View>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.email}>{user.email}</Text>
            </View>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.value}>{user.netWorth} dhs</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 'auto' }}>
        <Pressable onPress={signOut}>
          <Text>Sign Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;
