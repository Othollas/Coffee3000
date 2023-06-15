import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import coffees from './coffees';

export default function Home(props) {
    const renderCoffeeItem = (item) => {
        return (
            <TouchableOpacity
                style={styles.coffeeItem}
                onPress={() => props.navigation.navigate("CoffeeItem", { item })}
            >
                <Image style={styles.coffeeImage} source={{ uri: item.image }} />
                <Text>{item.name}</Text>
                <Text>{item.price}€</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Un petit café !</Text> */}

            <Image style={styles.header} source={require("./img/header.jpg")} />

            <FlatList
                keyExtractor={item => item.id}
                data={coffees}
                renderItem={({ item }) => renderCoffeeItem(item)}
                numColumns={2}
            />
        </View>
    );
}

const largeur = Dimensions.get("screen").width;
const hauteur = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        width: largeur,
        height: hauteur / 3
    },
    title: {
        color: "green",
        fontSize: 24
    },
    coffeeItem: {
        padding: 10,
        flex: 1
    },
    coffeeImage: {
        width: 100,
        height: 200,
        transform: [{rotateY: '10deg'}, {rotateZ: '10deg'}]
    }
});
