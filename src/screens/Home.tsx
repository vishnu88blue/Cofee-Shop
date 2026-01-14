import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SlidersHorizontal } from 'lucide-react-native';
import CofeeTypes from '../components/CofeeTypes';
import { useWindowDimensions } from 'react-native';
import ItemList from '../components/ItemList';
import Offers from '../components/Offers';
import { ChevronDown } from 'lucide-react-native';
const Home = () => {
  const [cofeeType, setCofeeType] = useState<string>('All Coffee');
  const { height } = useWindowDimensions();

  return (
    <View>
      <LinearGradient
        colors={['#303030', '#111111']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: (height / 10) * 4,
        }}
      />

      <View style={{ marginHorizontal: 20 }}>
        <View style={{ marginTop: 60 }}>
          <Text
            style={{
              color: '#A2A2A2',
              fontSize: 13,
              fontFamily: 'Sora-Regular',
            }}
          >
            Location
          </Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 5 }}
          >
            <Text
              style={{
                color: '#D8D8D8',
                fontSize: 17,
                marginTop: 5,
                fontFamily: 'Sora-SemiBold',
              }}
            >
              46, Strat Street, Ohio
            </Text>
            <ChevronDown height={20} width={20} color={'#D8D8D8'} />
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <TextInput
            placeholder="Search Coffee"
            placeholderTextColor="#B0B0B0"
            style={{
              height: 50,
              width: '80%',
              color: 'white',
              paddingLeft: 10,
              borderRadius: 15,
              backgroundColor: '#555755',
              fontFamily: 'Sora-Regular',
            }}
          />
          {/* Search sections*/}
          <Pressable
            style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#C67C4E',
              borderRadius: 10,
            }}
          >
            <SlidersHorizontal height={20} width={20} color={'white'} />
          </Pressable>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 500 }}
        >
          {/*Offers section */}
          <Offers />

          {/* Sections */}
          <CofeeTypes value={cofeeType} setter={setCofeeType} />

          {/*Items */}
          <ItemList value={cofeeType} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
