import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Filtro } from './components/FilterBar';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState();

  const Produtos = [
    {
      id: 1,
    nome: "X-Box",
    categoria: "eletronicos",
    preco: 2999.90,
    imagem: 'https://cataas.com/cat/orange,cute'
    },
    {
      id: 2,
    nome: "Smartphone",
    categoria: "eletronicos",
    preco: 1599.90,
    imagem: 'https://cataas.com/cat/orange,cute'
    },
    {
      id: 3,
    nome: "Microondas",
    categoria: "eletrodomesticos",
    preco: 299.90,
    imagem: 'https://cataas.com/cat/orange,cute',
    },
    {
      id: 4,
    nome: "PC",
    categoria: "eletronicos",
    preco: 2999.90,
    imagem: 'https://cataas.com/cat/orange,cute',
    },
    {
      id: 5,
    nome: "Guarda-Roupa",
    categoria: "moveis",
    preco: 799.90,
    imagem: 'https://cataas.com/cat/orange,cute',
    },
    {
      id: 6,
    nome: "Mesa",
    categoria: "moveis",
    preco: 299.90,
    imagem: 'https://cataas.com/cat/orange,cute',
    },
  ]

  return (
    <View style={styles.container}>
        <View style={styles.pickerContainer}>
      <Picker
      style={styles.picker}
        selectedCategory={selectedCategory}
        onValueChange={(itemValue) =>
          setSelectedCategory(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    color: '#FFF',
  },
});
