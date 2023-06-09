import {View,Text,SafeAreaView,ScrollView} from "react-native"
import {useState} from "react"
import {Stack,useRouter} from "expo-router"
import {COLORS,icons,images,SIZES} from "../constants"
import {
    Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome
}
from "../components"

import {
    Nearlyjobs
} from "../components"

export default function Home(){

    const router = useRouter()

    return (
        <SafeAreaView
            style={{flex:1,backgroundColor:COLORS.lightWhite}}
        > 
            {/* the header of the  screen part */}

            <Stack.Screen options={{
                headerStyle:{
                    backgroundColor:COLORS.lightWhite
                },
                headerShadowVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />
                ),
                headerTitle:""
            }} /> 

            {/* the header of the screen part */}

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View
                    style={{
                        flex:1,
                        padding:SIZES.medium
                    }}
                >
                    <Welcome />
                    <Popularjobs />
                <Nearbyjobs />
                </View>

            </ScrollView >



        </SafeAreaView>
    )
}