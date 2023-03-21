import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const studentData=[
    {
    Id:101,
    name:"John Brown",
    major:"Software Development",
    awards:"Completed 24 units. Scored HD in 22 units. Scored 100 in 2 units",
    photo:"101jb.jpg",
    },
   {
    Id:102,
    name:"Smith Jackson",
    major:"Business Analytics",
    awards:"Completed 24 units. Scored HD in 20 units.",
    photo:"102sj.jpg",
    }
   ]
   
  
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <View>
      <Text style={styles.Header}>Notable scientists</Text>
      </View>
      <View style={styles.Lists}>
      {studentData.map((scientist, index) => {
        return (
          <View key={index} style={styles.Item}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{scientist.name}</Text>
            <Text style={styles.image}></Text>
            <Text>Major: {scientist.major}</Text>
            <Text>Awards: {scientist.awards}</Text>
          </View>
        )
      })}
      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  container1: {
    flex: 1,
    backgroundColor: '#d0d3d3',
    width: '90%',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 60,
  },
  image: {
    borderWidth: 2,
    backgroundColor: 'black'
  },
  Lists: {
    width:'100%',
   
    flex: 1,
    flexDirection: 'column',
   
  }, 
  Item : {
  
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderRadius: 5

  }
});
