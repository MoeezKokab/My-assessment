import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import Color from "../Constant/Color";

// display  data 
const ItemList = (props) => {
    return (
        <TouchableOpacity style={styles.itemList} onPress={() =>
   //console.log("press")      
     {return props.GotoChat(props.item.name)}

        } >
            <View style={styles.itemListView}>
                <Avatar.Text size={24} label={props.item.name[0]} backgroundColor={Color.primary} />
                <Text style={styles.itemListText}>
                    {props.item.name}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemListView: {
        flexDirection: 'row',
    },
    itemListText: {
        marginLeft:10,
        fontSize: 20,
    },

})

export default ItemList;