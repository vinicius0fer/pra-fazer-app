import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <Image style={styles.logo} source={require('./assets/logo-pra-fazer.png')}></Image>
      
      <View>
      <TextInput placeholder = "E-mail" style={styles.input}></TextInput>
      <TextInput placeholder = "Senha" style={styles.input}></TextInput>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.entrar}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.criar}>Criar Conta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  main:{
    backgroundColor: '#FF6600',
    flex: 1,
    alignItems: 'center',
    paddingTop: 230,

  },

  logo:{
    marginBottom: 50,
  },

  input:{
    fontSize:22,
    borderRadius: 10,
    backgroundColor: "#DDD",
    padding: 10,
    marginBottom: 20,

    height: 50,
    width: 400,
  },

  btn:{
    backgroundColor: "#070A52",
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 400,
    marginBottom: 20,
  },

  entrar:{
    color: "#FFF",
    textAlign:"center",
    fontWeight: "bold",
    fontSize:18,
    
  },

  criar:{
    color:"#FFF",
    textAlign: "center",
    fontSize:15,
  }
});