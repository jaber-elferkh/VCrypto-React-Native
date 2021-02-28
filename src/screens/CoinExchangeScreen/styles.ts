import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    // borderWidth: 2,
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 5,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // borderWidth: 2,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#b1b1b1',
    padding: 10,
    flex: 1,
    margin: 20,
  },
  button: {
    backgroundColor: '#2f95dc',
    width: '100%',
    marginTop: 'auto',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
