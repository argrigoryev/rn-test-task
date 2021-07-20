import * as React from 'react';
import { useEffect, useState } from 'react';
import uuid from 'uuid';
import { StackScreenProps } from '@react-navigation/stack';

import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import QuotationRow from '../components/QuotationRow';
import { RootStackParamList } from '../types';
import ErrorRow from '../components/ErrorRow';

import PoloniexModel from '../models/PoloniexModel';

export default function QuotesTabScreen({ navigation }: StackScreenProps<RootStackParamList, 'Root'>) {
  const poloniexModel = new PoloniexModel();
  const tableHeaders = { name: 'Name', last: 'Last', highestBid: 'Highest Bid', percentChange: 'Percent Change' };
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // init model
    poloniexModel.setQuotes = (quotes: any) => setQuotes(quotes);
    poloniexModel.setHasError = (hasError: any) => setHasError(hasError);
    poloniexModel.startQuotesTimer();
    // go back to this tab
    navigation.addListener('focus', () => {
      poloniexModel.startQuotesTimer();
    });
    // go out from this tab
    navigation.addListener('blur', () => {
      poloniexModel.stopQuotesTimer();
      setQuotes([]);
      setHasError(false);
    });
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <QuotationRow quotation={tableHeaders} />
        {
          hasError ? <ErrorRow /> : quotes.length == 0 ?
              <ActivityIndicator size='large' animating={true} style={styles.activityIndicator} /> :
              quotes.map(quotation => (<QuotationRow quotation={quotation} key={uuid.v1()} />))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    padding: 10
  },
  activityIndicator: {
    alignSelf: 'center',
    marginTop: '50%'
  }
});
