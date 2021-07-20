import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { QuotationRowParamList } from '../types';
import TableCell from './TableCell';

export default function QuotationRow({ quotation }: QuotationRowParamList) {
    return (
        <View style={styles.row}>
            <TableCell text={quotation.name} />
            <TableCell text={quotation.last} />
            <TableCell text={quotation.highestBid} />
            <TableCell text={quotation.percentChange} />
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
