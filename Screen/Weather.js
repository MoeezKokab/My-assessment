import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon, Text, Card } from 'react-native-elements'
import Color from '../Constant/Color'
import API from '../Constant/API'



const Weather = (props) => {
    useEffect(() => { weather() }, []) // load for one time


    const [info, setInfo] = useState({
        name: "loading !!",
        temp: "loading",
        humidity: "loading",
        desc: "loading",
        icon: "loading",
        country: "loading"
    })

    const weather = () => {
        // openweathermap API city: Lahore 
        fetch(API.waetherAPI)
            .then(data => data.json())
            .then(results => {
                //console.log(info.country)
                setInfo({
                    name: results.name,
                    temp: results.main.temp,
                    humidity: results.main.humidity,
                    desc: results.weather[0].description,
                    icon: results.weather[0].icon,
                    country: Object.values(results.sys)[2]

                })


            })
            .catch(err => {
                alert(err.message)
            })

    }



    return (
        <Card style={styles.container}>

            {/* current weather image (description) */}
            <Image
                style={styles.image}
                source={{ uri: API.iconAPI + info.icon + ".png" }}

            />

            <View style={{ alignSelf: "center", paddingBottom: 20 }}>
                {/* description of weather */}
                <Text h4 style={{ marginLeft: 7 }}>{info.desc}</Text>
                <Text style={{ marginLeft: 4 }} h5>{info.name},{info.country}</Text>

            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text h5>temp:{info.temp - 273.15} C</Text>
                <Text h5>humidity:{info.humidity}% </Text>
                <View >
                     {/* refresh status */}
                    <Icon

                        name='refresh'
                        type='material'
                        color={Color.icon}
                        onPress={weather}
                    />
                </View>

            </View>


        </Card>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center'
    }, image: {
        width: 100,
        height: 100,
        alignSelf: 'center'

    }
});


export default Weather