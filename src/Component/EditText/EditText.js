import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './EditTextStyle';

export class EditText extends React.Component {
    render() {
        return (
            <View style={styles.inputTxt}>
                <TextInput
                    style={{ marginLeft: 26, fontSize: 20 }}
                    {...this.props}
                />
            </View>
        );
    }
}

export default EditText;
