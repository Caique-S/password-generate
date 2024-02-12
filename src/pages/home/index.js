import { useState } from "react"
import{View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import Slider from "@react-native-community/slider"
import { ModalPassword} from "../../components/modal/index"

let charset = "abcdefghijlmnopqrstuvxzwyk0123456789ABCDEFGHIJLMNOPQRTSUVXZWYK!@#$%&*"

export function Home(){

  const [size, setSize] = useState(10);
  const [passwordValue, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword(){
    
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(password)
    setModalVisible(true)
  }

  return(
    <View style={styles.container}>
      <Image
      source={require("../../../assets/padlock.png")}
      style={styles.logo}
      />
    <View>
      <Text style={styles.title}>{size} caracteres </Text>
    </View>

    <View style={styles.area}>
      <Slider
      style={{height:20,}}
      minimumValue={5}
      maximumValue={25}
      // minimumTrackTintColor="#a1a1a1"
      // maximumTrackTintColor="#1c1c1c"
      // thumbTintColor="#808080"
      value={size}
      onValueChange={ (value) => setSize(value.toFixed(0)) }
      />
    </View>

    <TouchableOpacity style={styles.button} onPress={generatePassword} >
      <Text style={styles.buttonText}>Gerar Senha</Text>
    </TouchableOpacity> 

    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <ModalPassword password={passwordValue} handLeClose={() => setModalVisible(false)} />
    </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f3f3ff",
  },
  logo:{
    width:200,
    height:200,
    marginBottom:30,
  },
  area:{
    width:"78%",
    marginTop:14,
    marginBottom:34,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding:18,
  },
  button:{
    width:"70%",
    padding:20,
    backgroundColor:"#4f4f4f",
    borderRadius:8,
    alignItems:"center",
    marginBottom:20
  },
  buttonText:{
    fontWeight:"bold",
    color:"#fff",
    fontSize:20
  },
  title:{
    fontSize:40,
    fontWeight:"bold"
  }
})