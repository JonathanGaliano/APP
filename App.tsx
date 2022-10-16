import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo, AntDesign, FontAwesome,SimpleLineIcons, Ionicons, MaterialIcons } 
from '@expo/vector-icons';
export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
          style={styles.imagen}
          source={require("./2.jpg")}/>
          <View style={styles.camara} >
          <Entypo name="camera" size={25} color="white" />
          </View>
          <Text style={styles.encabezado}>Personal informatico</Text>

          <View style={styles.h}>
            <View>
              <Text style={styles.textprincipal}>Name</Text>
              <Text> Abdullah Maun</Text>
            </View>
          </View>

          <View style={styles.h}>
            <View>
                <Text style={styles.textprincipal}>Contact Number</Text>
                <Text> +8801800000000</Text>
                <View style={styles.icon}><Ionicons name="pencil" size={25} color="black" /></View>
            </View>
          </View>

          <View style={styles.h}>
            <View>
              <Text style={styles.textprincipal}>Date of birht</Text>
              <Text> DD MM YYYY</Text>
              <View style={styles.icon}><Ionicons name="pencil" size={60} color="black" /></View>
            </View>
          </View>

        <View style={styles.h}>
          <View>
            <Text style={styles.textprincipal}>Location</Text>
            <Text> Add Details</Text>
          </View>
        </View>

        <View>
          <FontAwesome style={styles.button}>
          <Text style={styles.boton}>     Continue</Text>
          </FontAwesome>
    </View>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },

  header: {
    height: "35%",
    backgroundColor: "green",
    borderRadius: 30,
  },

  imagen: {
    height: "20%",
    width: "25%",
    top: 70,
    marginLeft: "32%",
    borderRadius: 100,
    position: 'absolute',
},

camara: {
  backgroundColor:"#779192",
  width: 30,
  height: 30,
  justifyContent: "center",
  alignItens:"center",
  borderRadius:100,
  top: -85,
  right: -220,
},

  encabezado: {
    right: -15,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  
  h: {
    right: -15,
    backgroundColor:"#8BEAEE",
    top: 0,
    margin:1,
    width: 325,
    height: 80,
    borderRadius: 10,
  },
  textprincipal: {
    padding: 10,
    color: "green",
    fontSize: 15,
    fontWeight: "bold",
  },
  icon: {
    top: -30,
  right: -285,
  },

  button: {
    margin:20,
    backgroundColor:"green",
    width: 200,
    height: 50,
    borderRadius:20,
    right: -55,
    
  },

  boton: {
    color:"white",
    fontSize: 30,
    position:"absolute",
  }
});

