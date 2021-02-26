import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    // borderWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 2,
    alignItems: 'center',
  },
  place: {
    marginRight: 10,
    fontSize: 18,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,

    // marginBottom: 2,
  },
  symbol: {
    color: '#6b6b6b',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default styles;
