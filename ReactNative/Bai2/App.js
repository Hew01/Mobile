import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const OpenSeaAPI = () => {
  const [assets, setAssets] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const fetchData = () => {
    setLoading(true);
    axios.get('https://testnets-api.opensea.io/api/v1/assets')
      .then(response => {
        setAssets(response.data.assets);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.image_url }} style={styles.image}/>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Load Data" onPress={fetchData} />
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={assets}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  item: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },

  image: {
    width: 200,
    height: 200,
    marginRight: 9,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OpenSeaAPI;
