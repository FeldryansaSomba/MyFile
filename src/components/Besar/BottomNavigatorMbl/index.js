import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/colors';
import TabItemMbl from '../TabItemMbl';

const BottomNavigatorMbl = ({ state, descriptors, navigation, dispatch }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }

          // if(route.name !== "BerandaMbl") {
          //   dispatch(deleteParameterFilter())
          // }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
         <TabItemMbl
         key={index}
         label={label}
         isFocused={isFocused}
         onLongPress={onLongPress}
         onPress={onPress}/>
        );
      })}
    </View>
  )
}

export default BottomNavigatorMbl

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.kedelapan,
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        justifyContent: 'space-between'
      }
})