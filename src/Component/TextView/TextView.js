import React from 'react';
import { Text } from 'react-native';
import styles from './TextViewStyle';

export class TextView extends React.Component {
    render() {
        const { title, label, style } = this.props;
        return (
            <Text
                style={label ? [styles.label, { style }] : title ? [styles.title, { styles }] : {}}
                {...this.props}
            />
        );
    }
}
export default TextView;