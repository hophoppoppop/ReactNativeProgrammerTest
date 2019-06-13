import React, {Component} from 'react';
import {Keyboard, Platform, StatusBar, TouchableWithoutFeedback, View} from 'react-native';
import * as COLORS from '../../Constant/color'
import PropTypes from 'prop-types';

import {observer} from "mobx-react";

@observer
export default class Modal extends Component {

    static defaultProps = {
        modalStyle: {},
        onModalClose: ()=>{

        }
    };

    static propTypes = {
        modalStyle: PropTypes.any,
        onModalClose: PropTypes.func,
    };

    toggleModal(show){
        this.setState({
            modalShow: show
        })
    }

    constructor(props){
        super(props);
        this.state = {
            modalShow: false,
        };
    }

    render(){

        const {modalStyle,onModalClose,} = this.props;
        const {children} = this.props;

        const modalStyles = [];
        modalStyles.push({
            width:"100%",
            height:"100%",
            backgroundColor:'rgba(0, 0, 0, 0.5)',
            position:"absolute",
            alignItems:"center",
            justifyContent:"center",
        });

        // custom style
        modalStyles.push(modalStyle);

        if(!this.state.modalShow)
        {
            return null;
        }else{
            return (
                <TouchableWithoutFeedback
                    onPress={()=>{
                        onModalClose();
                        this.setState({
                            modalShow: false
                        })
                    }}
                >
                    <View
                        style={modalStyles}
                        onPress={()=>{

                        }}>
                        {children}
                    </View>
                </TouchableWithoutFeedback>
            )
        }
    }
}