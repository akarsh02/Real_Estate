import { View, Text, SafeAreaView, ScrollView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {
 const handleLogin =() =>{

 }
  return (
    <SafeAreaView className='bg-white h-full'>
     <ScrollView contentContainerClassName='h-full'>
      <Image source ={images.onboarding} className="w-full h-4/6" resizeMode='contain'/>
     <View className='justify-center items-center'>
      <Text className='text-black-200 font-rubik text-base'>WELCOME TO REAL SCOUT</Text>
      <Text className='text-black-300 font-rubik-bold text-center text-3xl mt-2'>Let's Get You Closer To
       {"\n"}<Text className='text-primary-300'>
        Your Ideal Home</Text></Text>
      <Text className='text-black-300 text-center mt-12 font-rubik'>Login to Real Scout with Google</Text>
      <TouchableOpacity className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5' onPress={handleLogin}>
       <View className='flex justify-center items-center flex-row'>
          <Image className='w-5 h-5' 
          resizeMode='contain' source={icons.google}/>
          <Text className='font-rubik-medium text-black-300 ml-2'>Continue with Google</Text>
       </View>
      </TouchableOpacity>
     </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn