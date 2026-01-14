import { View, Text, Image } from 'react-native';
import React from 'react';
import cofeeData from '../mockdata/cofeeItems.json';
import { Plus } from 'lucide-react-native';
import { Star } from 'lucide-react-native';

const ItemList = ({ value }: { value: string }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {cofeeData.data.map((item, index) => (
        <View
          id="individual-items"
          key={index}
          style={{
            backgroundColor: '#F9F9F9',
            width: '47%',
            borderRadius: 20,
            marginBottom: 35,
          }}
        >
          <View
            id="rating-abs-pos"
            style={{
              position: 'absolute',
              top: 15,
              right: 30,
              zIndex: 2,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Star height={15} width={15} color={'gold'} fill={'gold'} />
            <Text style={{ color: 'white', fontSize: 11 }}>{item.rating}</Text>
          </View>

          <View
            id="plus-sign-abs-pos"
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              zIndex: 2,
              backgroundColor: '#C67C4E',
              width: 30,
              height: 30,
              borderRadius: 6,
              padding: 5,
            }}
          >
            <Plus
              style={{ alignSelf: 'center' }}
              height={15}
              width={15}
              color={'white'}
            />
          </View>

          <Image
            source={require('../assets/images/cafee-mocha.png')}
            style={{
              width: 150,
              height: 150,
              zIndex: 1,
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 25,
            }}
          />

          <View style={{ marginLeft: 20, marginBottom: 10 }}>
            <Text
              style={{
                fontFamily: 'Sora-SemiBold',
                fontSize: 19,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontFamily: 'Sora-Light',
                fontSize: 13,
              }}
            >
              {item.type}
            </Text>
            <Text
              style={{
                fontFamily: 'Sora-SemiBold',
                fontSize: 19,
                marginTop: 5,
              }}
            >{`$ ${item.price}`}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ItemList;
