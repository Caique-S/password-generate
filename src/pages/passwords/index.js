import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useStorage from "../../hooks/useStorage"

import { PasswordItem } from './components/passwordItem'

export function Passwords(){

    const [listPassword, setListPassword] = useState([])
    const focused = useIsFocused();
    const {getItem, removeItem} = useStorage();

    useEffect(()=>{
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPassword(passwords)
        }
        loadPasswords();
    },[focused])

    async function handleRemovePassword(item){
      const passwords = await removeItem("@pass",item)
      setListPassword(passwords)
     }

    return(
        <SafeAreaView style={{flex:1,}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>

            <View style={styles.content}> 
                <FlatList
                style={{flex:1, paddingTop: 14}}
                data={listPassword}
                keyExtractor={ (item) => String(item)}
                renderItem={ ({item}) => <PasswordItem data={item} removePassword={()=> {handleRemovePassword(item)}} />}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#4f4f4f",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },
    title:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold"
    },
    content:{
        flex:1,
        paddingLeft:14,
        paddingRight: 14,
    }
    
})