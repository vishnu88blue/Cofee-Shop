import { View, Text } from 'react-native';
import React from 'react';
import { BadgePercent, ChevronRight } from 'lucide-react-native';

const DiscountSection = () => {
  const discount = 1;
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: 'white',
        height: 60,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}
    >
      <BadgePercent color={'#C67C4E'} />
      <View style={{ flex: 1, marginLeft: 20 }}>
        <Text style={{ fontFamily: 'Sora-SemiBold', fontSize: 16 }}>
          {discount ? `${discount} Discount is applied ` : 'Check for Offers'}
        </Text>
      </View>
      <ChevronRight color={'black'} />
    </View>
  );
};

export default DiscountSection;
