import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Minus, Plus } from 'lucide-react-native';

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  type: string;
  size: string;
  price?: number;
};

const CartList = () => {
  const cartItems: CartItem[] = [
    {
      id: '1',
      name: 'Caffe Latte',
      quantity: 2,
      type: 'Deep Foam',
      size: 'M',
      price: 12,
    },
  ];
  return (
    <View>
      {cartItems.map(item => (
        <View
          key={item.id}
          style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}
        >
          <Image
            source={require('../assets/images/cafee-mocha.png')}
            style={{
              width: 65,
              height: 65,
              zIndex: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text
              style={{ fontFamily: 'Sora-SemiBold', fontSize: 18 }}
            >{`${item.name}  ${item.size}`}</Text>
            <Text
              style={{
                fontFamily: 'Sora-Regular',
                fontSize: 14,
                color: 'gray',
                marginTop: 5,
              }}
            >
              {item.type}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 20,
              }}
            >
              <Minus />
            </Pressable>
            <Text style={{ fontFamily: 'Sora-SemiBold', fontSize: 18 }}>
              {item.quantity}
            </Text>
            <Pressable
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 20,
              }}
            >
              <Plus />
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CartList;
