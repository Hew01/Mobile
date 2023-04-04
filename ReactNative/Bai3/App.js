import React, { useState } from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PRODUCTS = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150/0000FF/808080',
    description: 'AaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa',
    name: 'Item 1',
    price: '10,000',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF',
    description: 'AaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa',
    name: 'Item 2',
    price: '20,000',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150/FFFF00/000000',
    description: 'AaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa',
    name: 'Item 3',
    price: '30,000',
  },
];

function ProductList({navigation, route}) {

  const {products} = route.params;
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Product list</Text>
      <ScrollView contentContainerStyle={styles.productListContainer}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.productContainer}
            onPress={() => {
              setSelectedProduct(product);
              navigation.navigate('ProductDetails', {
                product: product,
              });
            }}
          >
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function ProductDetails({route}) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Details</Text>
      <View style={styles.productDetailsContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productDescriptionContainer}>
          <View style={styles.productInfo}>
            <View style={styles.productListContainer}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>   
            </View>
            <Text style={styles.productDescriptionLabel}>Description</Text>
            <Text style={styles.productDescription}>{product.description} </Text>
          </View>  
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={({ navigation }) => ({
            title: 'Product list',
            headerTitleStyle: styles.screenTitle,
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          })}
          initialParams={{ products: PRODUCTS }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={({ navigation }) => ({
            title: 'Details',
            headerTitleStyle: styles.screenTitle,
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  headerStyle: {
    backgroundColor: '#0000FF',
  },

  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  productListContainer: {
    paddingVertical: 10,
  },

  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },

  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  productInfo: {
    flex: 1,
    marginLeft: 10,
  },

  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  productPrice: {
    fontSize: 16,
  },

  productDescriptionContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },

  productDescriptionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  productDescription: {
    fontSize: 14,
  },

  productDetailsContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
});
  
export default App;           
