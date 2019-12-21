import React from 'react'
import {
    View,
} from 'react-native'

const Row = (props) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent:'space-between', minHeight:44, alignItems:'center', borderBottomWidth:1, borderColor:'#DDDDDD' }} >
            {props.children}
        </View>
    )
}

export default Row
