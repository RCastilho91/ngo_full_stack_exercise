import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import * as MailComposer from 'expo-mail-composer';

export default function Detail() {
    const navigation = useNavigation();
    const message = "test for e-mail"

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Teste',
            recipients: ['rodrigo.m.castilho@outlook.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5511983117790&text=${ message }`);
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image source={ logoImg } />

                <TouchableOpacity onPress={ navigateBack }>
                    <Feather name="arrow-left" size={ 28 } color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={ styles.incident }>
                <Text style={ styles.incidentProperty }>ONG: </Text>
                <Text style={ styles.incidentValue }>APAD</Text>

                <Text style={ styles.incidentProperty }>CASO: </Text>
                <Text style={ styles.incidentValue }>Teste</Text>

                <Text style={ styles.incidentProperty }>VALOR: </Text>
                <Text style={ styles.incidentValue }>R$ 120,00</Text>
            </View>

            <View style={ styles.contactBox }>
                <Text style={ styles.heroTitle }>Salve o dia!</Text>
                <Text style={ styles.heroTitle }>Seja o herói desse caso.</Text>

                <Text style={ styles.heroDescription }>Entre em contato:</Text>

                <View style={ styles.actions }>
                    <TouchableOpacity style={ styles.action } onPress={ sendWhatsapp }>
                        <Text style={ styles.actionText }>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.action } onPress={ sendMail }>
                        <Text style={ styles.actionText }>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}