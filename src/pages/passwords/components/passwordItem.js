import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export function PasswordItem({data, removePassword}){
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    )
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#4f4f4f",
        padding:14,
        width: "90%",
        marginBottom:14,
        borderRadius:12,
        alignItems: "center",
        justifyContent: "space-between",
    }, 
    text: {
        color:"#fff",
        fontSize: 14,
        fontWeight: "bold"
    }
})