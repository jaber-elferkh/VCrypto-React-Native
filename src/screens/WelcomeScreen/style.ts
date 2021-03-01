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
  googleButton: {
    marginTop: 'auto',
    marginBottom: 20,
    // borderWidth: 2,
    width: '70%',
  },
  buttonImage: {
    width: '100%',
    // height: 50,
    resizeMode: 'contain',
  },
});
export default styles;
