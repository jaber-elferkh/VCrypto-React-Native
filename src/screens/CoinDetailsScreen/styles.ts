import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  container: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    // borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  symbol: {
    color: '#606060',
  },
  currentPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
    // borderWidth: 2,
  },
  rightContainer: {
    flexDirection: 'row',
    // borderWidth: 2,
  },
  valueContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  label: {
    color: '#606060',
    marginBottom: 5,
  },
  value: {
    fontSize: 23,
  },
  button: {
    flex: 1,
    margin: 10,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default styles;
