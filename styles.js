
import { StyleSheet } from "react-native-web";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal : 20,

    },
    inputContainer : {
        width : '100%' ,
        flexDirection: 'row',
        marginTop : 55,
      // marginHorizontal : 20,
        alignItems : 'center' ,
        justifyContent : 'space-around',
    
    },
    input:{
        width: '80%' ,
        borderBottomWidth: 1 ,
        borderBottomColor : '#3C4F76',
        color : '#3C4F76',
      // alignItems : center , 
    },
    button : {
        backgroundColor : '#3C4F76',
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
        
    }

});

