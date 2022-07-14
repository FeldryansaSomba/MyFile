import React from 'react';
import { View, StyleSheet} from 'react-native';
import TabItemCS from '../TabItemCS';
import { colors } from '../../../utils/colors';
import { connect } from 'react-redux';
import { deleteParameterFilter } from '../../../actions/ProdukAction';

const ContohBottom = ({ state, descriptors, navigation, dispatch }) => {
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

          if(route.name !== "BerandaCS") {
            dispatch(deleteParameterFilter())
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
         <TabItemCS
         key={index}
         label={label}
         isFocused={isFocused}
         onLongPress={onLongPress}
         onPress={onPress}/>
        );
      })}
    </View>
  );
}

export default connect()(ContohBottom)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'crown',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'space-between'
  }
})