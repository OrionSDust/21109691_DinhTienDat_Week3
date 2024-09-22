import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () = {
  return (
    View style={styles.container}
      View style={styles.circle}View
      Text style={styles.title}GROW YOUR BUSINESSText
      Text style={styles.subtitle}
        We will help you to grow your business using online server
      Text
      View style={styles.buttonContainer}
        TouchableOpacity style={styles.button}
          Text style={styles.buttonText}LOGINText
        TouchableOpacity
        TouchableOpacity style={styles.button}
          Text style={styles.buttonText}SIGN UPText
        TouchableOpacity
      View
    View
  );
};

const styles = StyleSheet.create({
  container {
    flex 1,
    justifyContent 'center',
    alignItems 'center',
    backgroundColor '#00BFFF',  màu nền xanh 
  },
  circle {
    width 100,
    height 100,
    borderRadius 50,
    borderWidth 5,
    borderColor '#000',  màu viền đen
    marginBottom 40,
  },
  title {
    fontSize 24,
    fontWeight 'bold',
    color '#000',
    marginBottom 20,
  },
  subtitle {
    fontSize 14,
    color '#000',
    textAlign 'center',
    marginBottom 60,
    paddingHorizontal 20,
  },
  buttonContainer {
    flexDirection 'row',
    justifyContent 'space-between',
    width '80%',
  },
  button {
    backgroundColor '#FFD700',  màu vàng cho các nút
    paddingVertical 15,
    paddingHorizontal 30,
    borderRadius 5,
    marginHorizontal 10,
  },
  buttonText {
    fontSize 16,
    fontWeight 'bold',
    color '#000',
  },
});

export default App;
