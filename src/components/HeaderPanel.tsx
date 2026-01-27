import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { ChevronLeft, Ellipsis } from 'lucide-react-native';
import { Heart } from 'lucide-react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type HeaderPanelProps = {
  isBackButtonRequired?: boolean;
  headerText?: string;
  isLikeButtonRequired?: boolean;
};

const HeaderPanel = ({
  isBackButtonRequired = true,
  headerText,
  isLikeButtonRequired = false,
}: HeaderPanelProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
        marginHorizontal: 5,
        marginBottom: 30,
      }}
    >
      {isBackButtonRequired && (
        <Pressable onPress={() => navigation.goBack()}>
          <ChevronLeft />
        </Pressable>
      )}
      <View>
        <Text style={{ fontSize: 15, fontFamily: 'Sora-Medium' }}>
          {' '}
          {headerText ?? 'test'}
        </Text>
      </View>
      {isLikeButtonRequired ? (
        <Pressable onPress={() => setIsFavorite(!isFavorite)}>
          <Heart
            color={isFavorite ? 'red' : 'black'}
            fill={isFavorite ? 'red' : 'white'}
          />
        </Pressable>
      ) : (
        <Pressable onPress={() => navigation.navigate('DashboardTabs')}>
          <Ellipsis color={'black'} fill={'white'} />
        </Pressable>
      )}
    </View>
  );
};

export default HeaderPanel;
