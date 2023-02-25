import React from 'react'
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import FlatCards from './components/FlatCards'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList />
        <FancyCard />

      </ScrollView>
    </SafeAreaView>
  )
}