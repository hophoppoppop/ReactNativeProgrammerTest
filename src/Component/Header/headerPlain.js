import React, {Component} from 'react';
import {StyleSheet, View,TouchableOpacity,Image,Text} from 'react-native';
import PropTypes from 'prop-types';

import * as ROUTERLIST from '../../Routers/routerList';
import {PagePop, RouterDirector} from '../../Routers/routerManager';
import {BackIcon} from '../../Assets';
import * as COLORS from "../../Constant/color";
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HeaderPlain extends Component {

    static defaultProps = {
        // imageSource:{uri: 'https://i.ytimg.com/vi/H5j5kfy15a0/maxresdefault.jpg'},
        backgroundColor: COLORS.HEADER,
        textSize: 18,
        textColor: COLORS.WHITE,
        textLabel: "Default",
        headerIconThemes: COLORS.WHITE,
        action: (() => {
            PagePop()
        }),
        showHomeButton: true,
        showBackButton: true,
        headerStyle: {},
    };

    static propTypes = {
        textSize: PropTypes.any,
        textColor: PropTypes.any,
        textLabel: PropTypes.any,
        headerIconThemes: PropTypes.oneOf(["white","black"]),
        action: PropTypes.any,
        showHomeButton: PropTypes.any,
        showBackButton: PropTypes.any,
        headerStyle: PropTypes.any,
    };

    render(){
        const {backgroundColor} = this.props;
        const {textSize, textColor, action} = this.props;
        const {textLabel} = this.props;
        const {showBackButton,headerStyle} = this.props;

        let styles = StyleSheet.create({
            container: {
                flexDirection: "row",
                backgroundColor: backgroundColor,
                alignItems:"center",
                height: 53,
            },
            iconContainer: {
                alignSelf: "center",
            },
            textContainer: {
                flex: 1,
                alignSelf: "center",
            }
        });

        return (
            <View style={[styles.container,headerStyle]}>
                {
                    showBackButton?
                        <View style={{paddingLeft:10}}>
                            <TouchableOpacity onPress={()=>{
                                action();
                            }}>
                                <Icon size={20} name={"chevron-left"} color={textColor}/>

                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{width:50,height:50}}>
                        </View>

                }
                <View style={{flex: 1, justifyContent: "center",height:53,alignItems:"center"}}>
                    <Text
                        style={{
                            color: textColor,
                            fontSize:textSize,
                            fontWeight: 'bold',
                            paddingRight:30
                        }}
                    >
                        {textLabel}
                    </Text>
                </View>
            </View>
        );
    }
};