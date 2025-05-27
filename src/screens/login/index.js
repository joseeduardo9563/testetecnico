import React, { useState } from "react";
import {
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
  Keyboard,
  Platform,
} from "react-native";
import {
  Text,
  NativeBaseProvider,
  Input,
  Button,
  ArrowBackIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  VStack,

} from "native-base";
import axios from "axios";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ColorsScheme from "../../settings/ColorsScheme";
import Server from "../../settings/Server";
import CryptoJS from "crypto-js";


const LoginScreen = ({ navigation }) => {
//   const [matricula, setMatricula] = useState("");
//   const [senha, setSenha] = useState("");
//   const [isSecurity, setIsSecurity] = useState(true);

//   const getAceite = async (matricula) => {
//     try {
//       const response = await axios.get(`${Server.GET}getTermoAceite/${matricula}`);
//       if (response.data && response.data.flag_termo === 1) {
//         navigation.navigate("Carteirinha");
//       } else {
//         navigation.navigate("Termos");
//       }
//     } catch (error) {
//       console.error(error);
//       navigation.navigate("Carteirinha");
//     }
//   };

//   const onSubmit = async () => {
//     if (matricula !== "" && senha !== "") {
//       Keyboard.dismiss();
//       try {
//         const hash = await CryptoJS.SHA1(senha).toString();
//         const url = `${Server.API}login/autenticate.asp?matricula=${matricula}&senha=6821215D86529AF9FF82DC1009F85A217288A130`;
//         console.log(url);
//         const response = await fetch(url);
//         const responseJson = await response.json();

//         if (responseJson.didFind) {
//           await AsyncStorage.setItem("@usuario", JSON.stringify(responseJson));
//           navigation.navigate("Carteirinha");
//         } else {
//           Alert.alert("Matrícula ou senha inválidos.", "Verifique os dados e tente novamente.", [{ text: "Tentar novamente" }], { cancelable: false });
//         }
//       } catch (error) {
//         console.error(error);
//         Alert.alert("Ops! Algo deu errado.", "Tente novamente mais tarde.", [{ text: "OK" }], { cancelable: false });
//       }
//     } else {
//       Alert.alert("Campo vazio.", "Preencha todos os campos e tente novamente.", [{ text: "OK" }], { cancelable: false });
//     }
//   };

  return (
    <VStack space={1} alignItems="center">
      <Text fontSize="6xl">6xl</Text>
    </VStack>
  );
};

export default LoginScreen;