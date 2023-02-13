import React from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'

export default function ElevatedCards() {
  return (
    <View>
          <Text style={styles.headingText}>Elevated Cards</Text>
          <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Tap</Text>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                <Text>me</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>to</Text>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                <Text>Scroll</Text>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                <Text>cards</Text>
            </View>
          </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 8,
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 5,
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
})