import React, { useEffect, useState } from "react";
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
    Box,
    FormControl,
    Stack,
    WarningOutlineIcon,
    Divider,
    AlertDialog,
    HStack,
    IconButton,
    CloseIcon,
    Toast,
    useToast
} from "native-base";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";

const HomeScreen = ({ navigation }) => {
    

    return (
        <View>
            <ScrollView w="100%">
                <Text>Teste</Text>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;