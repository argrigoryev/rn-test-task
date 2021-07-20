/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {View as DefaultView} from 'react-native';

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  About: undefined;
  Quotes: undefined;
};

export type AboutTabParamList = {
  AboutTabScreen: undefined;
};

export type QuotesTabParamList = {
  QuotesTabScreen: undefined;
};

export type Quotation = {
  name: string;
  last: string;
  highestBid: string;
  percentChange: string;
}

export type QuotationRowParamList = {
  quotation: Quotation;
};

export type TableCellParamList = {
  text: string;
  isError?: boolean;
};
