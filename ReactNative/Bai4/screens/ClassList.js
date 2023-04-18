import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import CLASSES from '../products';

export default function ClassList() {

    const [classList, setClassList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        setClassList(CLASSES)
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={classList}
                renderItem={({item}) => (
                    <TouchableOpacity 
                      style={styles.classCard}
                      onPress={() =>
                        navigation.navigate('ClassDetails', {
                          class: item, 
                        })
                      }>
                        <View style={{marginLeft: 20}}>
                            <Text style={styles.className}>{item.name}</Text>
                            <Text style={styles.classDescription}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{paddingVertical: 20}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
      },
      classCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 10,
        marginBottom: 10,
      },
      className: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      classDescription: {
        marginBottom: 5,
      },
      classPrice: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      button: {
        padding: 10,
        backgroundColor: '#4169E1',
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
})