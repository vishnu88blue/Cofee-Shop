import { Text, ScrollView, Pressable } from 'react-native';
import React from 'react';

const CofeeTypes = ({
  value,
  setter,
}: {
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const cofeeTypes = ['All Coffee', 'Cappuccino', 'Latte', 'Black', 'Tea'];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      style={{ marginVertical: 30 }}
    >
      {cofeeTypes.map((type, index) => (
        <Pressable
          key={index}
          style={{
            backgroundColor: value === type ? '#C67C4E' : '#e6e8e6',
            marginHorizontal: 10,
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => setter(type)}
        >
          <Text
            style={{
              fontSize: 15,
              color: value === type ? 'white' : 'black',
              fontFamily: 'Sora-Regular',
            }}
          >
            {type}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CofeeTypes;
