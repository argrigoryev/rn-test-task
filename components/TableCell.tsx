import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, Cell } from '../components/Themed';
import { TableCellParamList } from '../types';

export default function TableCell({ text, isError }: TableCellParamList) {
    return (
        <Cell style={styles.cell}>
            <Text style={isError ? { color: 'red', width: '100%' } : {}}>{text}</Text>
        </Cell>
    );
}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        height: 50,
        padding: 2
    }
});
