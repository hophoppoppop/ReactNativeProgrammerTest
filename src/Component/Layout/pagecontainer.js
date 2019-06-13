import React, {Component} from 'react';
import {Keyboard, Platform, StatusBar, TouchableWithoutFeedback, View} from 'react-native';
import * as COLORS from '../../Constant/color'
import PropTypes from 'prop-types';

import {observer} from "mobx-react";

@observer
export default class PageContainer extends Component {

    static defaultProps = {
        barStyle: "light-content",
        containerStyle: {
            flex:1
        },
        statusBarColor: COLORS.STATUS_BAR,
    };

    static propTypes = {
        barStyle: PropTypes.any,
        containerStyle: PropTypes.any,
        statusBarColor: PropTypes.any,
    };

    render(){

        const {containerStyle, statusBarColor, barStyle} = this.props;
        const {children} = this.props;

        const containerStyles = [];
        containerStyles.push({
            backgroundColor: "white",
        });

        // custom style
        containerStyles.push(containerStyle);

        return (
            <View
                style={containerStyles}
            >
                <StatusBar
                    hidden
                    animated
                    StatusBarAnimation={"slide"}
                    backgroundColor={statusBarColor}/>
                {((Platform.OS === "ios") ? this.iosStatusBar(statusBarColor) : null)}
                {children}
            </View>
        )
    }


    iosStatusBar(bgColor) {
        return (
            <View style={{
                paddingTop: 35,
                backgroundColor: bgColor,
            }}/>
        )
    }
}