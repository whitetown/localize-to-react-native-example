import React from 'react';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
} from 'react-native'

import { LocalizeToProvider } from 'localize-to';

import initialTranslations from './resources'

import Welcome from './components/WelcomeClass'
import LanguageSelect from './components/LanguageSelect'
import Downloads from './components/Downloads'
import Header from './components/Header'
import CurrentKeyValues from './components/CurrentKeyValues'

function App() {
    return (
        <View style={{ flex:1 }}>
            <SafeAreaView>
            </SafeAreaView>
            <ScrollView>
                <View style={{ justifyContent:'center', alignItems:'center', height:44, backgroundColor:'#eeeeee' }} >
                    <Text style={{ fontWeight:'bold' }} >Localize.to Demo</Text>
                </View>
                <Welcome />
                <LanguageSelect />
                <Header />
                <Downloads />
                <CurrentKeyValues />
            </ScrollView>
        </View>
    );
}

const LocalizedApp = () => {
    return (
        <LocalizeToProvider
            language={'en'}
            fallbackLanguage={'en'}
            translations={initialTranslations}
            apiKey={'787847642e3b9c47c773921261d490e8'}
        >
            <App />
        </LocalizeToProvider>
    )
}

export default LocalizedApp;
