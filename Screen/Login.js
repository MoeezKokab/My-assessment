import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import API from '../Constant/API';
import Color from '../Constant/Color'










const Login = (props) => {




    const [ID, setID] = useState('')
    const [firstTimeFetch, setFirstTimeFetch] = useState(false)

    const [password, setPassword] = useState("")
    const [Data, SetData] = useState([])



    const fetchData = async () => {
        console.log('inside  api')
        await fetch(`${API.localHost}login`, { // ngrok link + router
            method: 'post',
            headers: {
                "content-Type": 'application/json' //
            },
            body: JSON.stringify({ // all information to post
                userID: ID,
                password: password


            })
        }).then(res => res.json().then(data => {

            console.log(data)
            SetData(data)
        })).catch(er => { console.log(er) })
        // console.log('out ')
        setFirstTimeFetch(true)



    }

    useEffect(() => {
        try {
            fetchData() // fetch all logn account from DB
        }
        catch{
            er => { }
        }
    })


    // Add new user
    const AddData = (userID, password) => {
        fetch(`${API.localHost}signup`, { // ngrok link + router
            method: 'post',
            headers: {
                "content-Type": 'application/json' //
            },
            body: JSON.stringify({ // all information to post
                userID,
                password


            })
        }).then(res => res.json().then(data => {
            console.log("inside")
            SetData(data)
        }))

        if (Data.userID === userID) {


            Alert.alert('This user id is already taken')

        }
        else {
            props.navigation.goBack()
            Alert.alert('your account has been successfully created ')
  //save user data in DB 
            fetch(`${API.localHost}send-data`, { // ngrok link + router
                method: 'post',
                headers: {
                    "content-Type": 'application/json' //
                },
                body: JSON.stringify({ // all information to post
                    userID,
                    password


                })
            }).then(res => res.json().then(data => {
                console.log(data)
            }))
        }






    }

    // fetch data andchecking enter login id , password is correct 

    const LoginCheck = async () => {
        await fetchData()
        if (firstTimeFetch) {
            if (Data.userID === ID && Data.password === password) {

                return props.route.params.setLoginScreen(false)
            }



            Alert.alert('Error', 'Enter invalid password or User id')
        }
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
                <Button type="clear" title='Login' onPress={LoginCheck} />

                <Button type="clear" title='Sign up' onPress={() => props.navigation.navigate('Signup', { AddData: AddData })} />

            </View>


        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGroundColor,


    },
    button: {
        flexDirection: 'row',
        flex: 1,
        margin: 16,
        justifyContent: "space-around"
    }

});





export default Login;