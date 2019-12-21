import React from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'

import { useLocalizeTo } from 'localize-to'

const LanguageSelect = () => {

    const { localize, language, translations, setLanguage, fallbackLanguage, setFallbackLanguage } = useLocalizeTo()

    return (
        <View style={{ padding:10, marginHorizontal:10, backgroundColor:'#EEEEEE', borderRadius:8 }} >
            <Text>{localize('select_language')}</Text>
            <View style={{ flexDirection: 'row', justifyContent:'space-evenly' }} >
            {
                Object.keys(translations).map( (l, index) => {
                    return (
                        <Button key={index} title={l} onPress={()=>setLanguage(l)} color={l === language ? 'red' : undefined} />
                    )
                })
            }
            </View>
            <Text>{localize('select_fallback')}</Text>
            <View style={{ flexDirection: 'row', justifyContent:'space-evenly' }} >
                <Button title={'en'} onPress={()=>setFallbackLanguage('en')} color={fallbackLanguage ? 'red' : undefined} />
                <Button title={localize('clear')} onPress={()=>setFallbackLanguage(null)} color={!fallbackLanguage ? 'red' : undefined} />
            </View>
        </View>
    )
}

export default LanguageSelect
