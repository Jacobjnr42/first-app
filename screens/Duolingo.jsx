import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

const Duolingo = () => {
  return (
    <View style={styles.container}>
      <Image source = {require('./../assets/amos jmp.png')} style={styles.image}/>
      <Text style={styles.DuolingoText}>Duolingo</Text>
      <Text style={styles.description}>the free, fun, and effective way to learn a language</Text>
      <CustomButton title= {'GET STARTED'} textColor={'green'} backgroundcolor={'green'} borderColor={'#525D70'}borderWidth={2}/>
      <CustomButton title={'I ALREADY HAVE AN ACCOUNT'} textColor={'green'} borderColor={'#525D70'} borderWidth={2}/>
      </View>
  )
}

export default Duolingo

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent: 'center',
    height: '100%'
  },
  text:{
    color: 'white'
  },
   image:{
    width: 163,
    height: 153,
   },
  description:{
    fontSize: 18,
    color:'white',
    fontWeight: 'regular',
    textAlign:'center',
    marginTop: 20,
    width: 255
  },
  DuolingoText:{
    fontSize: 40,
    color: '#2BD800',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
},
buttonContainer: {
  marginTop: 100
}


})