import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect, Slot } from 'expo-router'

const AppLayout = () => {
 const {loading,isLoggedIn} = useGlobalContext()
  if(loading){
   return (
    <SafeAreaView className='flex-1 justify-center justify-center bg-white'>
       <ActivityIndicator size="large" className='text-primary-300'/>
    </SafeAreaView>
   )
  }
  if(!isLoggedIn){
   return <Redirect href='/sign-in'/>
  }
  return <Slot/>
}

export default AppLayout