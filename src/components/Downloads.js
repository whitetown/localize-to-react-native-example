import React from 'react'
import {
    View,
    Text,
    Button,
} from 'react-native'

import { useLocalizeTo } from 'localize-to'

import Row from './Row'

const Downloads = () => {

    const { localize, localizeIsLoading, downloadLanguage, downloadLanguages, downloadVersion } = useLocalizeTo()

    return (
        <View style={{ padding:10 }} >
            {localizeIsLoading ?
            (<View style={{ justifyContent:'center', alignItems:'center', height:44 }} >
                <Text>Loading...</Text>
            </View>) : null}
            <Row>
                <Text style={{ flex:1 }}>{localize('download_sk')}</Text>
                <Button title={'Get [SK]'} onPress={()=>downloadLanguage('sk')} className='button' />
            </Row>
            <Row>
                <Text style={{ flex:1 }} >{localize('download_pl_de')}</Text>
                <Button title={'Get [PL, DE]'} onPress={()=>downloadLanguages(['pl', 'de'])} className='button' />
            </Row>
            <Row>
                <Text style={{ flex:1 }} >{localize('download_all')}</Text>
                <Button title={'Get [All languages]'} onPress={()=>downloadLanguages([])} className='button' />
            </Row>
            <Row>
                <Text style={{ flex:1 }} >{localize('download_v1_uk')}</Text>
                <Button title={'Get v1.0.1 [UK]'} onPress={()=>downloadVersion('v1.0.1', ['uk'])} className='button' />
            </Row>
            <Row>
                <Text style={{ flex:1 }} >{localize('download_v1_all')}</Text>
                <Button title={'Get v1.0.1 [All]'} onPress={()=>downloadVersion('v1.0.1')} className='button' />
            </Row>
        </View>
    )
}

export default Downloads
