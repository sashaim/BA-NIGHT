import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput,Button} from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hola, Coder! </Text>
      <Text>Mi primer app en react native</Text> */}
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your event' style={styles.input}/>
        <Button title='Add' style={styles.button}/>
      </View >
      {/* <View style={styles.inputContainer} >
        <TextInput placeholder='Item' style={styles.input}/>
        <Button title='+' style={styles.button}/>
      </View> */}
      <View style={styles.listContainer}>
        <View style={styles.ItemContainer}>
          <Text style={styles.Item}>Conciertos</Text>
        </View>
        <View style={styles.ItemContainer}>
          <Text style={styles.Item}>Festivales Gastronomicos</Text>
        </View>
        <View style={styles.ItemContainer}>
          <Text style={styles.Item}>Restaurants</Text>
        </View>
        <View style={styles.ItemContainer}>
          <Text style={styles.Item}>Fiestas</Text>
        </View>
      </View>
    </View>
  );
}

