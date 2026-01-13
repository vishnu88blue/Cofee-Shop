import React from 'react';
import { View, StyleSheet } from 'react-native';
import { House } from 'lucide-react-native';
import { Heart } from 'lucide-react-native';
import { Handbag } from 'lucide-react-native';
import { Bell } from 'lucide-react-native';
import { SvgProps } from 'react-native-svg';

type Props = {
  name: string;
  focused: boolean;
};
const IconMap: Record<any, React.FC<SvgProps>> = {
  ['Home']: House,
  ['Favourites']: Heart,
  ['Cart']: Handbag,
  ['Alerts']: Bell,
};

export default function TabIcon({ name, focused }: Props) {
  const IconComponent: React.FC<SvgProps> = IconMap[name];
  return (
    <View style={styles.container}>
      <IconComponent
        height={30}
        width={35}
        fill={focused ? '#C67C4E' : 'white'}
        color={'#C67C4E'}
      />

      {focused && <View style={styles.dot} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dot: {
    marginTop: 4,
    width: 9,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#C67C4E',
  },
});
