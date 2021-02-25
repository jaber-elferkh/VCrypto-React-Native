import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  image: {
    height: '40%',
    aspectRatio: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 5,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'center',
    color: '#707070',
  },
});
export default styles;
