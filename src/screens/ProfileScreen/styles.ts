import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    // borderWidth: 2,
  },
  image: {
    height: 150,
    resizeMode: 'contain',
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    marginVertical: 30,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    marginRight: 10,
    borderRadius: 50,
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
  email: {},
});
export default styles;
