import React from 'react'
import {
    View,
    Text,
} from 'react-native'

import { useLocalizeTo } from 'localize-to'

import Row from './Row'

const CurrentKeyValues = () => {

    const { ls, localize } = useLocalizeTo()

    return (
        <View style={{ padding:10 }}>
            <Text style={{ fontWeight:'bold' }} >{localize('all_keys')}</Text>
            <View>
            {
                Object.keys(ls).map( (k, index) => {
                    return (
                        <Row key={index}>
                            <Text style={{ flex:1 }} >{k}</Text>
                            <Text style={{ flex:2 }} >{localize(k)}</Text>
                        </Row>
                    )
                })
            }
            </View>
        </View>
    )
}

export default CurrentKeyValues
