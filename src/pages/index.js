import React from 'react';
import {View, Image} from 'react-native';
import Logo from '../assets/Logo.png';
export default function Home(){
    return(
        <View>
            <Image source={Logo}/>
        </View>

    );

}