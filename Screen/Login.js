import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
// import { Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';










const Login = (props) => {




    const [ID, setID] = useState('')

    const [password, setPassword] = useState("")
    const [Data, SetData] = useState([])
    const fetchData = async () => {
        console.log('stop')
        await fetch('http://ae3466d1bf24.ngrok.io/')
            .then(res => res.json()
            )
            .then(data => {

                SetData(data)


            })

    }

    useEffect(() => {
        fetchData() // fetch all logn account from DB

    })


    // Add new user
    const AddData = (id, password) => {
        if (!Data.find(Element => Element.userID === id)) {
            props.navigation.goBack()
            Alert.alert('your account has been successfully created ')
            // SetData(preItem => {
            //     return [{ id, password }, ...preItem]



            // // }

            // )
            fetch("http://ae3466d1bf24.ngrok.io/send-data", { // ngrok link + router
                method: 'post',
                headers: {
                    "content-Type": 'application/json' //
                },
                body: JSON.stringify({ // all information to post
                    userID: id,
                    password


                })
            }).then(res => res.json().then(data => {
                console.log(data)
            }))



        }
        else { Alert.alert('This user id is already taken') }






    }

    // checking enter login id and password is correct 

    const LoginCheck = () => {



        if (Data.find(Element => Element.userID === ID && Element.password === password)) {

            return props.navigation.replace('Home')
        }
        Alert.alert('Error', 'Enter invalid password or User id')

    }



    return (

        <View style={styles.container}>



            <Input placeholder="User ID" secureTextEntry={false}
                label='User ID'
                value={ID}
                onChangeText={text => setID(text)}
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                } />
            <Input placeholder="Password" secureTextEntry={true}
                label='Password'
                value={password}
                onChangeText={text => setPassword(text)}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                    />
                } />


            <View style={styles.button}>
                <Button type="clear" title='Login' onPress={() => LoginCheck()} />

                <Button type="clear" title='Sign up' onPress={() => props.navigation.navigate('Signup', { AddData: AddData })} />

            </View>


        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dff4f7',


    },
    button: {
        flexDirection: 'row',
        flex: 1,
        margin: 16,
        justifyContent: "space-around"
    }

});





export default Login;