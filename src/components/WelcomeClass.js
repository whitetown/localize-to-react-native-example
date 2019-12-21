import React from 'react'
import {
    View,
    Text,
} from 'react-native'


import { withLocalizeTo } from 'localize-to'

class Welcome extends React.Component {

    render() {

        const { ls, lc } = this.props
        //const { language, fallbackLanguage, setLanguage, ...rest } = lc

        return (
            <View style={{ justifyContent:'center', alignItems:'center', height:44 }} >
                <Text>
                {lc.localize('welcome_dev')}!
                {ls['some_key_1']}
                {ls.some_key_2}
                </Text>
            </View>
        )
    }
}

export default withLocalizeTo(Welcome)
