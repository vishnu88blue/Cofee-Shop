import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import HeaderPanel from '../components/HeaderPanel';
import { useScreenDimensions } from '../hooks/use-screen-dimensions';
import DiscountSection from '../components/DiscountSection';
import CartList from '../components/CartList';
import { Wallet } from 'lucide-react-native';

const Order = () => {
  const { width } = useScreenDimensions();
  const [isDeliverSelected, setIsDeliverSelected] = useState<boolean>(true);
  return (
    <View style={{ paddingHorizontal: 30, flex: 1 }}>
      <HeaderPanel headerText={'Order'} />

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          backgroundColor: 'lightgray',
          justifyContent: 'space-between',
          alignSelf: 'center',
          height: 50,
          borderRadius: 15,
          padding: 5,
        }}
      >
        <Pressable
          style={{
            backgroundColor: isDeliverSelected ? '#C67C4E' : 'transparent',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => setIsDeliverSelected(true)}
        >
          <Text
            style={{
              color: isDeliverSelected ? 'white' : 'black',
              fontFamily: 'Sora-Medium',
              fontSize: 18,
            }}
          >
            Deliver
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: !isDeliverSelected ? '#C67C4E' : 'transparent',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => setIsDeliverSelected(false)}
        >
          <Text
            style={{
              color: !isDeliverSelected ? 'white' : 'black',
              fontFamily: 'Sora-Medium',
              fontSize: 18,
            }}
          >
            Pick Up
          </Text>
        </Pressable>
      </View>

      <Text
        style={{ fontFamily: 'Sora-SemiBold', fontSize: 18, marginTop: 30 }}
      >
        {isDeliverSelected ? 'Delivery Address' : 'Pick Up Location'}
      </Text>

      <View
        style={{
          borderWidth: 0.2,
          borderColor: 'gray',
          marginTop: 15,
          width: width * 0.8,
          alignSelf: 'center',
        }}
      />

      {/*CartList */}
      <CartList />

      <View
        style={{
          borderWidth: 1,
          borderColor: '#e8caba',
          marginTop: 20,
          width: width,
          alignSelf: 'center',
        }}
      />

      {/*Discount section */}
      <DiscountSection />

      {/*Payment Summary*/}
      <Text
        style={{ fontFamily: 'Sora-SemiBold', fontSize: 18, marginTop: 30 }}
      >
        Payment Summary
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: 'Sora-Regular', fontSize: 16 }}>Price</Text>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontSize: 16,
              textDecorationLine: 'line-through',
            }}
          >{`$ 10.2`}</Text>
          <Text
            style={{ fontFamily: 'Sora-SemiBold', fontSize: 16 }}
          >{`$ 5.6`}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}
      >
        <Text style={{ fontFamily: 'Sora-Regular', fontSize: 16 }}>
          Delivery Fee
        </Text>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontSize: 16,
              textDecorationLine: 'line-through',
            }}
          >{`$ 10.2`}</Text>
          <Text
            style={{ fontFamily: 'Sora-SemiBold', fontSize: 16 }}
          >{`$ 5.6`}</Text>
        </View>
      </View>

      {/*Total Amount*/}
      <View
        style={{
          width: width,
          height: 160,
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          padding: 30,
          paddingBottom: 40,
          justifyContent: 'center',
        }}
      >
        <View>
          <Wallet />
          <View>
            <Text></Text>
            <Text></Text>
          </View>
        </View>
        <Pressable
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#C67C4E',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontFamily: 'Sora-SemiBold',
              fontSize: 18,
            }}
          >
            Order Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Order;
