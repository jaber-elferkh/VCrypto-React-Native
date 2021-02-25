import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    // backgroundColor: 'blue',
    width: '100%',
  },
  image: {
    height: '25%',
    // aspectRatio: 1,
    resizeMode: 'contain',
  },
  balanceContainer: {
    // borderWidth: 2,
    width: '100%',
    marginVertical: 30,
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: '#777777',
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
export default styles;
