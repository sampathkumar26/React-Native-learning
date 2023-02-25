import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ContactList() {

    const contacts = [
        {
            "id": 1,
            "name": "Campos York",
            "email": "camposyork@avenetro.com",
            "photo": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            "id": 2,
            "name": "Esperanza Boone",
            "email": "esperanzaboone@cosmetex.com",
            "photo": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        {
            "id": 3,
            "name": "Holden Barry",
            "email": "holdenbarry@codax.com",
            "photo": "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            "id": 4,
            "name": "Daniels Barlow",
            "email": "danielsbarlow@opticom.com",
            "photo": "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            "id": 5,
            "name": "Leigh Burris",
            "email": "leighburris@kineticut.com",
            "photo": "https://randomuser.me/api/portraits/men/43.jpg"
        },]

  return (
    <View>
        <Text style={styles.headingText}>Contact List</Text>
          <ScrollView style={styles.container}>
            {
                contacts.map(
                    ({id, name, email, photo}) => (
                      <View key={id} style={styles.userCard}>
                            <Image source={{uri: photo}} style={styles.userImage} />
                            <View>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userEmail}>{email}</Text>
                            </View>

                      </View>
                    )
                )
            }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 16,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,

    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#8d3daf',
        padding: 8,
        borderRadius: 10,

    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    },
    userEmail: {
        fontSize: 12,
    },

})