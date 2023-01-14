import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles.js';


const Categories = ({ categories, selectedCategory }) => {
    return (
        <FlatList
            horizontal={true}
            data={categories}
            renderItem={({ item }) => {
                const selected = selectedCategory === item;
                return (
                    <View style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}]}>
                        <Text style={[styles.item, selectedCategory === item ? styles.selectedItem : {}]}> {item}</Text>
                    </View>
                );
        }}
        />
    );
};

export default React.memo(Categories);
