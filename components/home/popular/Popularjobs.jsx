import React from 'react'
import { View, Text , TouchableOpacity, FlatList,ActivityIndicator} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { COLORS, sizes } from '../../../constants'

const Popularjobs = () => {

  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Popular Jobs</Text>
            <TouchableOpacity>
              <Text style={styles.headerBtn}>Show all</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          {
            isLoading ? (
              <ActivityIndicator size="large" color={COLORS.primary} />
            ): error ? (
              <Text>Something went wrong !</Text>
            ):(
              <FlatList
                data={[1,2,3,4]}
                renderItem={({item})=>(
                  <PopularJobCard item={item} />
                )}
              />  
            )
          }
        </View>
    </View>
  )
}

export default Popularjobs