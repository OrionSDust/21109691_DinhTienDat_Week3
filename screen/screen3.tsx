import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Biểu tượng khóa */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/61/61457.png' }} // đường dẫn tới biểu tượng ổ khóa
        style={styles.icon}
      />
      <Text style={styles.title}>FORGET PASSWORD</Text>
      <Text style={styles.subtitle}>
        Provide your account's email for which you want to reset your password
      </Text>

      {/* Hộp nhập email */}
      <View style={styles.inputContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/561/561127.png' }} // Biểu tượng email
          style={styles.emailIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#777"
        />
      </View>

      {/* Nút "NEXT" */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
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
  icon: {
    width: 100,
    height: 100,
    marginBottom: 30,
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
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // màu nền của input
    width: '80%',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  emailIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#FFD700', // màu vàng cho nút "NEXT"
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
