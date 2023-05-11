
import { StyleSheet } from "react-native-web";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal : 20,

    },

    button : {
        backgroundColor : '#3C4F76',
        fontSize:20,

    },
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 20,

    },
    ItemContainer: {
        height: 80,
        justifyContent:'center',
        backgroundColor:'#3C4F76',
        borderRadius:5,
        marginVertical:5,
    },
    Item: {
        marginHorizontal: 20,
        color:'#fff',
        fontsize:16 ,
        
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop : 60 ,
        paddingVertical : 20,
    
    },
    modalTitle : {
        fontSize : 16,
        fontWeight: 'bold',
        marginBottom : 10,
        
    },
    modalDatailContainer : {
        paddingVertical: 20,
    },
    modalDatainMessage : {
        fontSize : 14,
        color :'#212121',
    },
    // selectedEvent : {
    //     fontSize : 14,
    //     color:'#212121',
    //     fontWeight:'bold',
    //     paddingVertical: 10,
    //     textAlign: 'center',
    //     marginBottom : 'center',
    // },
    buttonContainer : {
        width : '80%',
        flexDirection: 'row',
        justifyContent : 'space-around',
    },



});

