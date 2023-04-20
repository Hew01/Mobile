import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb36.db');

export default function ConstantsScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS constants (id INTEGER PRIMARY KEY AUTOINCREMENT, idname TEXT, name TEXT, quantity INTEGER);'
      );
      tx.executeSql('INSERT INTO constants (idname, name, quantity) VALUES (?, ?, ?)', ['cid1', 'thien1', 10]);
      tx.executeSql('INSERT INTO constants (idname, name, quantity) VALUES (?, ?, ?)', ['cid2', 'thien2', 20]);
      tx.executeSql('INSERT INTO constants (idname, name, quantity) VALUES (?, ?, ?)', ['cid3', 'thien3', 30]);
      tx.executeSql('INSERT INTO constants (idname, name, quantity) VALUES (?, ?, ?)', ['cid4', 'thien4', 40]);
      tx.executeSql('SELECT * FROM constants', [], (_, { rows }) =>
        setData(rows._array)
      );
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.constantContainer}>
        <Text style={styles.constantText}>ID Name: {item.idname}</Text>
        <Text style={styles.constantText}>Name: {item.name}</Text>
        <Text style={styles.constantText}>Quantity: {item.quantity}</Text>
      </View>
    );
  };
return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Constants</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 80,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flatList: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  flatListContent: {
    paddingVertical: 10,
  },
  constantContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  constantText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});