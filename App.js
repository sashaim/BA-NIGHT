import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput,Button} from 'react-native';
import { styles } from './styles';
import React, {useState} from 'react';

export default function App() {

  const [textItem,setItemText] = useState('');
  const [event,setEvent] = useState([]);

  const onAddEvent = () => {
    if (textItem.length == 0)return ;
    setEvent ([
      ...event,
      {
        id: Math.random().toString(),
        value: textItem
      }
    ]);
    setItemText('');
  }

  console.warn('event',event)
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your event' style={styles.input} value={textItem} onChangeText={(textItem) => setItemText (textItem)} />
        <Button title='+' style={styles.button} onPress={onAddEvent}/>
      </View >

      <View style={styles.listContainer}>
        {
          event.map((event) => {   
            return (
              <View key={event.id}style={styles.ItemContainer}>
                <Text style={styles.Item}>{event.value}</Text>
              </View>
            );
          })
        }
      </View>
    </View>
  );
}

