import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Accordion = ({title, content, backgroundColor, backgroundColor1}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{}}>
        <TouchableOpacity
          style={[styles.header, {backgroundColor: backgroundColor}]}
          onPress={() => setExpanded(!expanded)}>
          <View style={{}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={{color: '#fff', padding: 5, paddingBottom: 5}}>
              {content}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              height: 25,
              width: 25,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name={expanded ? 'chevron-up' : 'chevron-down'} />
          </View>
        </TouchableOpacity>
        {expanded && (
          <View style={[styles.content, {backgroundColor: backgroundColor}]}>
            <Text style={styles.title}>A1</Text>
            <View
              style={{
                paddingHorizontal: 5,
                marginVertical: 10,
                borderRadius: 10,
              }}>
              <TextInput
                placeholder="Type Here....."
                placeholderTextColor={'#fefefe'}
                style={{
                  width: '100%',
                  borderRadius: 10,
                  backgroundColor: backgroundColor1,
                  paddingLeft: 15,
                  opacity: 0.25,
                }}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default function App({backgroundColor}) {
  return (
    <View style={{borderRadius: 10}}>
      <View>
        <Accordion
          title="Q1"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor?"
          backgroundColor={backgroundColor}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // backgroundColor: '#fff',
    paddingHorizontal: 25,
    // backgroundColor: 'green'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 20,
    borderRadius: 20,
    backgroundColor: '#FF9B9B',
    paddingHorizontal: 5,
    paddingTop: 15,
    // paddingTop: 15,
    width: '100%',
    // backgroundColor: 'red'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 5,
    color: '#fff',
    // backgroundColor: 'pink'
  },
  content: {
    marginVertical: 20,
    borderRadius: 20,
    backgroundColor: '#FF9B9B',
    // paddingHorizontal: 25,
    paddingLeft: 5,
    paddingTop: 15,
    color: '#fff',
    // backgroundColor: 'red'
  },
});
