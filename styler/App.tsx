import React from 'react'
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native'
import ElevatedCards from './components/ElevatedCards'
import FlatCards from './components/FlatCards'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  )
}