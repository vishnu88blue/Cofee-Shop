import { Pressable, Image, ScrollView } from 'react-native';
import React from 'react';

const Offers = () => {
  const ImageMap: { [key: string]: any } = {
    'Special Offer 1': require('../assets/images/Ads.png'),
    'Special Offer 2': require('../assets/images/Ads.png'),
    'Special Offer 3': require('../assets/images/Ads.png'),
  };
  const offersList = [
    { id: '1', title: 'Special Offer 1' },
    { id: '2', title: 'Special Offer 2' },
    { id: '3', title: 'Special Offer 3' },
  ];
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ marginTop: 30 }}
      showsHorizontalScrollIndicator={false}
    >
      {offersList.map(offer => (
        <Pressable key={offer.id}>
          <Image
            source={ImageMap[offer.title]}
            style={{
              width: 320,
              height: 140,
              borderRadius: 10,
              marginVertical: 10,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              marginRight: 20,
            }}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Offers;
