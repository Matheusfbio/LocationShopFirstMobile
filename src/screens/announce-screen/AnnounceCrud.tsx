import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { TaskTextCrud } from './styles';

export function TaskCrud() {
    const [newName, SetNewName] = useState('');
    const [newDescription, SetNewDescription] = useState('');
    const [newStatus, SetNewStatus] = useState('');

    return (
        <SafeAreaView>
            <TaskTextCrud></TaskTextCrud>
        </SafeAreaView>
    );
}
