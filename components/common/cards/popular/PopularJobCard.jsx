import React from 'react'
import { View, Text, TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'

import styles from './popularjobcard.style'

import {useRouter} from "expo-router"

import {COLORS,SIZES} from "../../../constants";

import PopularJobCard  from "../../common/cards/popular/PopularJobCard"

const PopularJobCard = () => {

  const router = useRouter()

  return (
    <View>
      <Text>PopularJobCard</Text>
    </View>
  )
}

export default PopularJobCard