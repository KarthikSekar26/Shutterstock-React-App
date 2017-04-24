import React, { Component } from 'react'

import {
   View,
   Text,
   Image,
   StyleSheet,
   ScrollView
} from 'react-native'

export default MyPresentationalComponent = (props) => {
    const createItem = (item) => (
      /*Getting image url from the api*/
      <Image
          style={{width: 460, height: 350}}
          source={{uri: item.assets.large_thumb.url}}
        />
   )
      /*Scroll View that is displayed*/
   return (
      <View style={styles.container}>
         <ScrollView>
            {props.listItems.map(createItem)}
         </ScrollView>
      </View>
   )
}
      /*Set of all CSS properties utilized in the application*/      
const styles = StyleSheet.create ({
    container: {
        height: 650,
        backgroundColor: 'white'
    },
    item: {
        margin: 20,
        padding: 20,
        height: 10,
        borderColor: 'black',
        borderWidth: 10
    }
})