import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          AboutTab: {
            screens: {
              AboutTabScreen: 'about',
            },
          },
          QuotesTab: {
            screens: {
              QuotesTabScreen: 'quotes',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
