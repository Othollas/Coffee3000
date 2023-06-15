import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const CoffeeItem = (props) => {
    const [item, SetItem] = useState(props.route.params.item);

    return (
        <View>
            <Image style={styles.coffeeImage} source={{ uri: item.image }} />
            <Text>{item.name}</Text>
            <Text>{item.price} €</Text>
            <Text>{item.description}</Text>
        </View>
    )
}

export default CoffeeItem

const styles = StyleSheet.create({
    coffeeImage: {
        width: 200,
        height: 400
    }
})