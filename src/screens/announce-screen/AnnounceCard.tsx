import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import database from '@react-native-firebase/database';
import React, { useEffect, useState } from 'react';
import { TaskBody, TaskContent } from './styles';
import { Text } from 'react-native';

export default function TaskCard() {
    const [data, setData] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newId, setNewId] = useState('');
    const [checked, setChecked] = useState();
    const [show, setShow] = useState(false);

    const firebaseData = async () => {
        database()
            .ref('/tasks/')
            .on('value', snapshot => {
                setData(snapshot.val());
            });
    };

    useEffect(() => {
        firebaseData();
    }, []);

    return (
        <SafeAreaView>
            <Text>Valor</Text>
        </SafeAreaView>
    );
}
