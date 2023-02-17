import React from 'react'
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default function ActionCard() {
    function openWebsite(website: string) {
        Linking.openURL(website)
}
  return (
    <View>
          <Text style={styles.headingText}>Blog card</Text>
          <View style={[styles.card, styles.cardElevated]}>
              <View style={styles.headingContainer}>
                  <Text style={styles.headerText}>What's is mean by linking</Text>
              </View>
              <Image source={{uri: 'https://blog.jscrambler.com/content/images/2020/01/jscrambler-blog-deep-linking-react-native.jpg'}} style={styles.cardImage} />
              <View style={styles.bodyContainer}>
                    <Text numberOfLines={2}>Linking gives you a general interface to interact with both incoming and outgoing app links.Every Link (URL) has a URL Scheme, some websites are prefixed with https:// or http:// and the http is the URL Scheme. Let's call it scheme for short.</Text>
              </View>
              <View style={styles.footerContainer}>
                  <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
                      <Text style={styles.socialLinks}>Read More</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev')}>
                      <Text style={styles.socialLinks}>Follow Me</Text>
                  </TouchableOpacity>
              </View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        color: 'white',
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
        backgroundColor: '#e07c24',
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
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '600',
    },
    cardImage: {
    height: 190,
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    socialLinks: {
        fontSize: 16,
        color: 'black',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
    },
})