import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Modal } from 'react-native';
import ItemList from './ItemList'
import { Text, Input } from 'react-native-elements'
import { FAB, Button } from "react-native-paper";
import Color from "../Constant/Color";



export default function Message(props) {
    const [model, setModel] = useState(false) // for the Model

    const [addNewGroup, setNewGroup] = useState() 


    // for new group
    const CreateNewGroup = () => {
        setGroup(preItem => {
            return [{ id: Math.random(), name: addNewGroup }, ...preItem]
        })
        setModel(false)
    }




    const [allContact, setAllcontact] = useState([
        { id: 1, name: 'constact 1' },
        { id: 4, name: 'Constact 2' },
        { id: 3, name: 'Constact 3' },


    ]);

    const [allGroup, setGroup] = useState([
        { id: 1, name: 'group 1' },
        { id: 4, name: 'group 2' },
        { id: 3, name: 'group 3' },

    ]);

    const GotoChat = (title) => {
        // console.log(title)
        return props.navigation.navigate('Chat', { title: title })
    }

    return (
        <View>
            <Text h1>Constact List</Text>
            <View style={{ height: 250 }} >
                {/* list of all Contact */}
                <FlatList
                    data={allContact}
                    renderItem={({ item }) => <ItemList item={item} GotoChat={GotoChat} />}

                />
            </View>
            <Text h1>Group List</Text>
            <View style={{ height: 250, }} >
                {/* list of all Group */}
                <FlatList
                    data={allGroup}
                    renderItem={({ item }) => <ItemList item={item} GotoChat={GotoChat} />}

                />
            </View>
            <Modal
                animationType='slide'
                visible={model}
                transparent={false}
                onRequestClose={() => setModel(false)} // for press back button

            >
                <View style={{ paddingTop: 50 }}>
                    <Button icon="keyboard-backspace" mode="contained"
                        onPress={() => setModel(false)}>
                        Go Back
                    </Button>
                    {/* get input name for new group */}
                    <Input
                        placeholder='Enter group Name'
                        leftIcon={{ type: 'font-awesome', name: 'users' }}
                        onChangeText={text => setNewGroup(text)}
                    />
                    <Button icon="check" onPress={() => {


                        console.log(addNewGroup)
                        CreateNewGroup()
                    }}>SAVE</Button>
                </View>


            </Modal>

            {/* insert new group  button */}
            <FAB
                theme={{ colors: { accent: Color.primary } }}
                style={styles.fab}
                small
                icon="account-multiple-plus-outline"
                onPress={() => {


                    setModel(true)
                }}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: -80,
    },
});