import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function FlatCards() {
  return (
    <View>
        <Text style={styles.headingText}>FlatCards</Text>
          <View style={styles.container}>
            <View style={[styles.card, styles.card1]}>
                <Text>Red</Text>
              </View>
              <View style={[styles.card, styles.card2]}>
                <Text>Green</Text>
              </View>
              <View style={[styles.card, styles.card3]}>
                <Text>Yellow</Text>
              </View>
          </View>
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
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 8,
    },
    card1: {
        backgroundColor: 'red'
    },
    card2: {
        backgroundColor: 'green'
    },
    card3: {
        backgroundColor: 'yellow'
    }
});