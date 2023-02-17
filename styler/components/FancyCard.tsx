import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

export default function FancyCard() {
  return (
    <View>
          <Text style={styles.headingText}>Trending Places</Text>
          <View style={[styles.card, styles.cardElevated]}>
              <Image source={{uri: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg'}} style={styles.cardImage} />
              <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>Taj Mahal</Text>
                  <Text style={styles.cardLabel}>Agra</Text>
                  <Text style={styles.cardDescription}>The city in Uttar Pradesh is chock-full of marvelous Mughal monuments, like Itimad-ud-Daulah's Tomb and Akbar's Mausoleum, decked out in hypnotic inlaid marble designs from top to bottom</Text>
                  <Text style={styles.cardFooter}>12 min away</Text>


</View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 16,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: 'white',
        color: 'black',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 16,

    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 2,

    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12,
    },
    cardFooter: {
        color: '#000000'
    },
})