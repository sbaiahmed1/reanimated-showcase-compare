import Animated, {
  LinearTransition,
  SlideInRight,
} from 'react-native-reanimated';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ListLayout() {
  const [data, setData] = useState([
    {id: '1', name: 'MEL', image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcGi1BcpXFJ5CCGr0sxVQN2kZHSEJb8PDYEsNRW30jKtjE2mWChgzmtK-E38zwhb6E87S4whw8_uoF-TRNZGLIVLz0kgQDSRv-VjBLDPeQQTa45g2YcOzd1TKEslvYk7vA-07ww1g?key=DlC9X5hT2D9QBEd9Uf2Kw6YY'},
    {id: '2', name: 'JINX', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg'},
    {id: '3', name: 'VI', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg'},
    {id: '4', name: 'VIKTOR', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg'},
    {id: '5', name: 'JAYCE', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg'},
    {id: '6', name: 'AMBESSA', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ambessa_0.jpg'},
    {id: '7', name: 'HEIMERDINGER', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg'},
    {id: '8', name: 'JAX', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg'},
    {id: '9', name: 'JARVAN', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg'},
    {id: '10', name: 'JANNA', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg'},
  ]);

  const deleteItem = (key: string) => {
    setData(prevState => {
      return prevState.filter(i => i.id !== key);
    });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <AnimatedPressable
              entering={SlideInRight.delay(100 * index).duration(500)}
              style={styles.itemContainer}
              onPress={() => {
                deleteItem(item.id);
              }}>
                <ImageBackground imageStyle={{height: 200, width: '100%'}} source={{uri: item.image}}>
                    <Text style={styles.text}>Hello {item.name}</Text>
                </ImageBackground>
            </AnimatedPressable>
          );
        }}
        itemLayoutAnimation={LinearTransition}
      />
    </SafeAreaView>
  );
}
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'black',
    height: 200,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
