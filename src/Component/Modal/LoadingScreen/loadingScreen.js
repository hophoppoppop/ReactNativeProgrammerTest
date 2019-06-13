import React, {Component} from 'react';
import {View,TouchableWithoutFeedback,ActivityIndicator,Text,FlatList,TouchableOpacity} from 'react-native';
import * as COLORS from '../../../Constant/color'
import PropTypes from 'prop-types';
import modalStore from '../../../Stores/modalStore';
import Icon from 'react-native-vector-icons/FontAwesome';

import {observer} from "mobx-react";

@observer
export default class LoadingScreen extends Component {

    static defaultProps = {
    };

    static propTypes = {
    };

    constructor(props){
        super(props);
    }

    static toggleLoading(show)
    {
        modalStore.loadingScreen = show;
    }

    render()
    {
        if(modalStore.loadingScreen) {
            return (
                <View style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <TouchableWithoutFeedback>
                        <View style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
                            <ActivityIndicator size="large" color={COLORS.LIGHT_GREEN}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )
        }else{
            return null;
        }
    }
}