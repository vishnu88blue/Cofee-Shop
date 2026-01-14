import { View, Text, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/landing_page.png')}
        style={{
          height: '80%',
        }}
        resizeMode="contain"
      />

      {/* Text Section */}
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          width: '100%',
          gap: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            textAlign: 'center',
            marginTop: 0,
            paddingHorizontal: 30,
            fontFamily: 'Sora-SemiBold',
          }}
        >
          Fall in Love with Coffee in Blissful Delight!
        </Text>

        <Text
          style={{
            color: 'grey',
            fontSize: 16,
            textAlign: 'center',
            paddingHorizontal: 30,
            fontFamily: 'Sora-Light',
            marginBottom: 20,
          }}
        >
          Welcome to our cozy coffee corner, where every cup is a delight for
          you
        </Text>

        <Pressable
          style={{
            backgroundColor: '#C67C4E',
            borderRadius: 10,
            width: '80%',
            height: 50,
            justifyContent: 'center',
          }}
          onPress={() =>
            navigation.navigate('DashboardTabs', {
              screen: 'Home',
            })
          }
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              padding: 10,
              fontWeight: '600',
              fontSize: 16,
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LandingPage;
