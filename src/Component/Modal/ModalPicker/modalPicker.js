import React, {Component} from 'react';
import {View,TouchableWithoutFeedback,TextInput,Text,FlatList,TouchableOpacity} from 'react-native';
import * as COLORS from '../../../Constant/color'
import PropTypes from 'prop-types';
import Modal from '../modal';
import Icon from 'react-native-vector-icons/FontAwesome';

import {observer} from "mobx-react";

@observer
export default class ModalPicker extends Component {

    static defaultProps = {
        pickerStyle: {
        },
        onPickerClose: ()=>{

        },
        pickerAction: ()=>{

        },
        pickerTitle:"",
        pickerList:[],
        modalRef: (component)=>{

        },
        showSearch: false,
    };

    static propTypes = {
        pickerStyle: PropTypes.any,
        onPickerClose: PropTypes.any,
        pickerAction:PropTypes.any,
        pickerTitle:PropTypes.any,
        pickerList:PropTypes.any,
        modalRef:PropTypes.any,
        showSearch: PropTypes.bool,
    };

    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
        };
    }

    render(){

        const {pickerStyle,onPickerClose,pickerTitle,pickerList,pickerAction,modalRef,showSearch} = this.props;
        const {children} = this.props;

        const pickerStyles = [];
        pickerStyles.push({
            backgroundColor:COLORS.WHITE,
            width:"80%",
            height:"80%",
            borderRadius:10
        });

        // custom style
        pickerStyles.push(pickerStyle);
        return (
            <Modal ref={(component)=>{
                modalRef(component);
                this.modalRef = component;
            }} onModalClose={()=>{
                onPickerClose();
                this.setState({
                    searchValue: ""
                })
            }}>
                <TouchableWithoutFeedback>
                    <View style={pickerStyles}>
                        <View style={{
                            height:60,
                            width:"100%",
                            backgroundColor:COLORS.HEADER,
                            borderTopStartRadius:10,
                            borderTopEndRadius:10,
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                            <Text style={{
                                fontSize: 24,
                                color:COLORS.WHITE
                            }}>
                                {pickerTitle}
                            </Text>
                        </View>
                        {this.props.showSearch?<View style={{flexDirection:"row",padding:10,alignItems:"center",justifyContent:"center",borderBottomWidth:1,borderColor:COLORS.GREY}}>
                            <Icon style={{paddingHorizontal:10}} name={"search"} size={24}/>
                            <TextInput
                                style={{flex:1,fontSize:24,paddingVertical:0}}
                                placeholder={"Search Language"}
                                onChangeText={(text) => {
                                    this.setState({
                                        searchValue: text,
                                    })}
                                }
                                value={this.state.searchValue}/>
                        </View>:null}
                        <FlatList
                            extraData={this.props}
                            data={this.state.searchValue===""?pickerList:pickerList.filter(s=>s.name.toLowerCase().indexOf(this.state.searchValue.toLowerCase())>-1 || s.value === null)}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) =>
                                <TouchableOpacity onPress={()=>{
                                    this.modalRef.toggleModal(false);
                                    pickerAction(item);
                                    this.setState({
                                        searchValue: ""
                                    })
                                }}>
                                    <View style={{flex:1,alignItems:"center",padding:10,borderBottomWidth:1,borderColor:COLORS.GREY}}>
                                        <Text style={{fontSize:20}}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}