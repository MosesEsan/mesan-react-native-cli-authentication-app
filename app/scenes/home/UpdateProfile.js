import React, { useState } from 'react';
import {View} from 'react-native';

import * as api from "../../services/auth";
import { useAuth } from "../../provider";

import Form from 'react-native-basic-form';
import {ErrorText} from "../../components/Shared";

export default function UpdateProfile (props) {
    const {navigation} = props;

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { state, updateUser } = useAuth();

    const fields = [
        {name: 'firstName', label: 'First Name', required: true, value:state.user.firstName},
        {name: 'lastName', label: 'Last Name', required: true, value:state.user.lastName},
        {name: 'username', label: 'Username', required: true, value:state.user.username}
    ];

    async function onSubmit(data) {
        setLoading(true);

        try {
            let response = await api.updateProfile(state.user._id, data);
            updateUser(response.user);

            setLoading(false);

            navigation.goBack();
        } catch (error) {
            setError(error.message);
            setLoading(false)
        }
    }

    let formProps = {title: "Submit", fields, onSubmit, loading };
    return (
        <View style={{flex:1, paddingHorizontal: 16}}>
            <View style={{flex:1}}>
                <ErrorText error={error}/>
                <Form {...formProps}/>
            </View>
        </View>
    );
};