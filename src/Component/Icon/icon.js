import React, {Component} from 'react';
import {StyleSheet, View,TouchableOpacity,Image,Text} from 'react-native';
import PropTypes from 'prop-types';

import * as ROUTERLIST from '../../Routers/routerList';
import {PagePop, RouterDirector} from '../../Routers/routerManager';
import {BackIcon} from '../../Assets';
import * as COLORS from "../../Constant/color";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Icon extends Component {

    static defaultProps = {
        type: "MaterialCommunityIcons"
    };

    static propTypes = {
        type: PropTypes.any,
    };

    render(){
        let props = this.props;
        let {type} = this.props;
        if(type === "MaterialCommunityIcons")
        {
            return <MaterialCommunityIcons {...props}/>
        }else if (type === "FontAwesome")
        {
            return <FontAwesome {...props}/>
        }
    }
};