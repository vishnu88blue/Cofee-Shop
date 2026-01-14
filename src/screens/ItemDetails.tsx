import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import HeaderPanel from '../components/HeaderPanel';
import { useScreenDimensions } from '../hooks/use-screen-dimensions';
import cofeeDataDetailed from '../mockdata/cofeeItemsDetailed.json';
import { useRoute } from '@react-navigation/native';
import { Bean, Milk, Motorbike, Star } from 'lucide-react-native';

const ItemDetails = () => {
  const { width } = useScreenDimensions();
  const route = useRoute();
  const { itemName } = route.params;
  const cofeeDetails = cofeeDataDetailed.data.find(
    item => item.name === itemName,
  );
  const isLong = (cofeeDetails?.description ?? '').length > 40;
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);
  const [cofeeSize, setCofeeSize] = useState<string>(
    cofeeDetails?.sizes[0] ?? '',
  );

  return (
    <View
      style={{
        backgroundColor: '#F9F9F9',
        flex: 1,
        paddingHorizontal: 30,
      }}
    >
      <HeaderPanel headerText={'Detail'} isLikeButtonRequired={true} />

      <Image
        source={require('../assets/images/cafee-mocha.png')}
        style={{
          width: width * 0.85,
          height: 200,
          marginTop: 5,
          borderRadius: 15,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text style={{ fontFamily: 'Sora-SemiBold', fontSize: 20 }}>
            {cofeeDetails?.name}
          </Text>
          <Text
            style={{
              fontFamily: 'Sora-Regular',
              fontSize: 12,
              color: 'gray',
              marginTop: 3,
            }}
          >
            {cofeeDetails?.beverageType}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 12,
            }}
          >
            <Star height={22} width={22} color={'#FBBE21'} fill={'#FBBE21'} />
            <Text
              style={{
                fontFamily: 'Sora-SemiBold',
                fontSize: 17,
                marginLeft: 5,
              }}
            >
              {`${cofeeDetails?.rating}`}{' '}
              <Text
                style={{
                  fontFamily: 'Sora-Regular',
                  fontSize: 13,
                  color: 'gray',
                }}
              >{`(${cofeeDetails?.totalRatings})`}</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginRight: 20,
          }}
        >
          <Motorbike height={30} width={30} strokeWidth={3} color={'#C67C4E'} />
          <Bean
            style={{ marginLeft: 20 }}
            height={30}
            width={30}
            fill={'#C67C4E'}
            color={'white'}
          />
          <Milk
            style={{ marginLeft: 20 }}
            height={30}
            width={30}
            fill={'#C67C4E'}
            color={'white'}
          />
        </View>
      </View>

      <View
        style={{
          borderWidth: 0.2,
          borderColor: 'gray',
          marginTop: 15,
          width: width * 0.8,
          alignSelf: 'center',
        }}
      />

      <View style={{ marginTop: 35 }}>
        <Text style={{ fontFamily: 'Sora-SemiBold', fontSize: 17 }}>
          Description
        </Text>
        <Text
          style={{
            fontFamily: 'Sora-Regular',
            fontSize: 14,
            marginTop: 10,
            color: 'gray',
          }}
        >
          {!isLong && cofeeDetails?.description}
          {isLong && showFullDescription && cofeeDetails?.description}
          {isLong &&
            !showFullDescription &&
            cofeeDetails?.description.slice(0, 200) + '..'}
          <Text
            onPress={() => setShowFullDescription(!showFullDescription)}
            style={{ color: '#C67C4E' }}
          >
            {showFullDescription ? ' Read Less' : ' Read More'}
          </Text>
        </Text>
      </View>

      <View style={{ marginTop: 35 }}>
        <Text style={{ fontFamily: 'Sora-SemiBold', fontSize: 17 }}>Size</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}
        >
          {cofeeDetails?.sizes.map((size, index) => (
            <Pressable
              key={index}
              style={{
                padding: 10,
                borderWidth: 1,
                borderRadius: 15,
                borderColor: cofeeSize === size ? '#C67C4E' : '#E3E3E3',
                width: width * 0.24,
                height: 45,
                backgroundColor: cofeeSize === size ? '#F9F2ED' : 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setCofeeSize(size)}
            >
              <Text
                style={{
                  fontFamily: 'Sora-Regular',
                  fontSize: 14,
                  color: cofeeSize === size ? '#C67C4E' : 'black',
                }}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/*Bottom container */}
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          width: width,
          height: 120,
          padding: 20,
          paddingBottom: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <Text
            style={{
              color: 'gray',
              fontFamily: 'Sora-Regular',
              fontSize: 16,
            }}
          >
            Price
          </Text>
          <Text
            style={{
              color: '#C67C4E',
              fontFamily: 'Sora-Bold',
              fontSize: 20,
            }}
          >{`$ ${cofeeDetails?.price ?? '0.00'}`}</Text>
        </View>
        <Pressable
          style={{
            width: width * 0.5,
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
            Add to Cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ItemDetails;
