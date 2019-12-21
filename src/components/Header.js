import React from 'react'
import {
    View,
    Text,
} from 'react-native'

import { useLocalizeTo } from 'localize-to'

import Row from './Row'

const Header = () => {

    const { ls, localize, language, fallbackLanguage, translations } = useLocalizeTo()

    return (
        <View style={{ padding:10 }} >
            <Row>
                <Text>{localize('current_language')}</Text>
                <Text>{language}</Text>
            </Row>
            <Row>
                <Text>{localize('fallback_language')}</Text>
                <Text>{fallbackLanguage}</Text>
            </Row>
            <Row>
                <Text>{localize('languages_count')}</Text>
                <Text>{Object.keys(translations).length}</Text>
            </Row>
            <Row>
                <Text>{localize('keys_count')}</Text>
                <Text>{Object.keys(ls).length}</Text>
            </Row>
        </View>
    )
}

export default Header
