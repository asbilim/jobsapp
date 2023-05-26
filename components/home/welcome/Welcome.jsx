import React from 'react'
import { View, Text } from 'react-native'
import {useState} from "react"
import {useRouter} from "expo-router"
import {
  TextInput,TouchableOpacity,FlatList,Image
} from "react-native"
import styles from './welcome.style'
import   {icons,SIZES} from "../../../constants"


const Welcome = () => {

  const jobList = ["Full-Time" , "Part-Time" , "Contractor", "Freelancer", "Contributor"]
  const [activeJobType, setactiveJobType] = useState("Full-Time")
  const router = useRouter()

  return (
    <View>

      <View style={styles.container}>
        <Text style={styles.username}>Welcome, Bill</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput} 
            value=""
            placeholder="what job are you looking for ?"
            onChange={()=>{}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>

        <FlatList
          data={jobList}
          showsVerticalScrollIndicator={false}
          renderItem = {({item})=>(

            <TouchableOpacity
              style={styles.tab(activeJobType,item)}
              onPress = {()=>{
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          
          )
        }
          keyExtractor={item => item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      
      </View>

    </View>
  )
}

export default Welcome