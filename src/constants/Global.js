const {Dimensions} = require('react-native');

const {width, height} = Dimensions.get('screen');
module.exports = {
  color: {
    primary: '#DA4440',
    secondary: '#50A5DC',
    grey: '#E4E4E5',
    yellow: '#F7DB56',
    white: '#fff',
    black: '#3c3c43',
    textInput: '#E4E4E5',
    navyBlue: '#3C3C43',

    success: '#55FF7F',
    light_grey: '#E4E4E5',
  },
  styles: {
    container: {
      flex: 1,
      width: width,
      height: height,
    },
    headerText: {
      fontSize: width / 15,
      color: '#000',
      fontWeight: 'bold',
      margin: 20,
    },
  },
  AppName: 'The Promise',
  BASE_URL: 'thepromisenig.com',
};
