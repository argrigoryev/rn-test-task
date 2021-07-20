import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import TableCell from './TableCell';

export default function ErrorRow() {
    return (
        <View style={styles.row}>
            <TableCell isError={true} text='Data retrieval error' />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});
