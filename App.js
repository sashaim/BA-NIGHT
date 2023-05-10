import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput,Button,FlatList,TouchableOpacity,Modal} from 'react-native';
import { styles } from './styles';
import React, {useState} from 'react';

export default function App() {

  const [textItem,setItemText] = useState('');
  const [event,setEvent] = useState([]);
	const[modalVisible,setModalVisible]=useState(false);
	const [selectedEvent,setSelectedEvent]=useState(null);



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
	const onHandlerEvent = (id) =>{
		setModalVisible(!modalVisible);
		const selectedEvent = event.find(event => event.id === id);
		setSelectedEvent(selectedEvent);
	}
	
	const onHandleCancelModal = () => {
		setModalVisible(!modalVisible);
		setSelectedEvent(null);
	}

	const onHandlerDeleteEvent =(id) => {
		setEvent(event.filter(event=> event.id !== id ));
		setModalVisible(false);
	}


	const renderItem = ({ item }) => (             
		<TouchableOpacity key={event.id}style={styles.ItemContainer} onPress={() => onHandlerEvent(item.id)}>
			<Text style={styles.Item}>{item.value}</Text>
		</TouchableOpacity>
	)

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your event' style={styles.input} value={textItem} onChangeText={(textItem) => setItemText (textItem)} />
        <Button title='+' style={styles.button} onPress={onAddEvent}/>
      </View >

      <View style={styles.listContainer}>
        <FlatList
					renderItem={renderItem}
					data={event}
					keyExtractor={(Item) => {Item.id}}
        />

      </View>
			<Modal visible={modalVisible} animationType='slide'>
				<View style={styles.modalContainer}>
					<Text style={styles.modalTitle}>Event detail</Text>
					<View style={styles.modalDatailContainer}>
						<Text style={styles.modalDatailMessage}> Are you sure to dalate this item ?</Text>
						<Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
					</View>
					<View style={styles.buttonContainer}>
						<Button title='Cancel'color='#52528c' onPress={()=>onHandleCancelModal()}/>
						<Button title='Delete'color='#52528c' onPress={()=> onHandlerDeleteEvent(selectedEvent.id)}/>
					</View>
				</View>
			</Modal>
    </View>
  );
}



        {/* {
          event.map((event) => {   
            return (
              // <View key={event.id}style={styles.ItemContainer}>
              //   <Text style={styles.Item}>{event.value}</Text>
              // </View>
            );
          })
        } */}
