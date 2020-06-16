import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import { Text } from 'react-native-elements'


export default function Chat(props) {
    const title = props.route.params.title
    
    //radam msg
    const [messages, setMessages] = useState([
        {
            _id: 2,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
            },
        },
    ])

// send msg after prees send button
    const onSend = (msg) => {
        console.log(msg[0].text)
        setMessages(pre => {
            return [{
                _id: 1,
                text: msg[0].text,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                }
            }, ...pre]
        })
    }



    return (
        <View style={styles.container}>

            <Text style={{ alignSelf: "center" }} h1>{title}</Text>
            <GiftedChat

                messages={messages}
                onSend={(msg) => onSend(msg)}
                user={{
                    _id: 2,
                }}
            />

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
});
