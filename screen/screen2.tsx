import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.title}>GROW YOUR BUSINESS</Text>
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.howWeWorkButton}>
        <Text style={styles.howWeWorkText}>HOW WE WORK?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B2EBF2', // màu nền xanh nhạt giống trong ảnh
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10, // Viền dày hơn
    borderColor: '#000', // màu viền đen
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Sử dụng space-evenly để phân bổ khoảng cách đều
    width: '120%', // Điều chỉnh width của container để nút "SIGN UP" xa hơn
    marginBottom: 30, // Khoảng cách giữa các nút và nút "HOW WE WORK?"
  },
  button: {
    backgroundColor: '#FFD700', // màu vàng cho các nút
    paddingVertical: 10,
    paddingHorizontal: 30, // Giảm kích thước ngang để phù hợp với container mới

  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  howWeWorkButton: {
    marginTop: 20,
  },
  howWeWorkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
