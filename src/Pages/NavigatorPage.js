import React, {Component} from 'react';
import {TouchableOpacity, View, Dimensions} from 'react-native';
import {PageContainer,HeaderPlain,Icon} from "../Component";
import styles from "../Styles";
import * as COLORS from "../Constant/color";

let {width,height} = Dimensions.get("screen");

export default class NavigatorPage extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
            fromText: props.text,
            autoDetectedLanguage: null,
            fromLang: "id",
            fromLangText:"Indonesian",
            toText:"",
            toLang: "en",
            toLangText:"English",
            listLang: [],
            pickerType:"from", //pickerType: {"from","to"}
            onTranslate: false,
            language:"",
        }
    }

    componentDidMount(){
    }

    Chatting(record){
        let answer = [];

        let userRecord = [];

        record.map((temp,index)=>{
            let splitRecord = temp.split(" ");
            let command = splitRecord[0];
            let id = splitRecord[1];
            let indexOf = userRecord.findIndex(s=>s.id === id);
            if(splitRecord.length > 2)
            {
                if(indexOf === -1)
                {
                    indexOf = userRecord.length;
                    userRecord.push({
                        id: splitRecord[1],
                        name: splitRecord[2]
                    });
                }else{
                    userRecord[indexOf].name = splitRecord[2];
                }
            }
            if(command !== "Change")
            {
                let commentInChat = []
                commentInChat.push(userRecord[indexOf]);
                if(command === "Enter")
                {
                    commentInChat.push(" came in.");
                }else if(command === "Leave")
                {
                    commentInChat.push(" has left.");
                }
                answer.push(commentInChat);
            }
            /*tempComment.push({
                comment: splittedComment[0],
                id: splittedComment[1]
            });
            if(splittedComment[0] === "Enter" || splittedComment[0] === "Change")
            {
                let checkIdIndex = tempId.findIndex(s=>s.id === splittedComment[1]);
                if(checkIdIndex === -1)
                {
                    tempId.push({
                        id: splittedComment[1],
                        name: splittedComment[2],
                    })
                }else{
                    tempId[checkIdIndex].name = splittedComment[2];
                }
            }*/
        });
        /*tempComment.map((value)=>{
            let commentInChat = tempId.filter(s=>s.id === value.id)[0].name;
            if(value.comment !== "Change")
            {
                if(value.comment === "Enter")
                {
                    commentInChat+= " came in.";
                }else if(value.comment === "Leave")
                {
                    commentInChat+= " has left.";
                }
                answer.push(commentInChat);
            }
        });*/

        return answer;
    }

    render() {
        return (
            <PageContainer>
                <HeaderPlain showBackButton={false} textLabel={"Navigator"}/>
                <View style={[styles.mainBackground,{
                    padding:10,
                    flexDirection:"row",
                    flexWrap:"wrap",
                    justifyContent:"space-between"
                }]}>
                    <TouchableOpacity style={{width:"100%",height:100,borderRadius:10,borderWidth:1,borderColor:COLORS.LAVENDER,marginBottom:10,alignItems:"center",justifyContent:"center"}} onPress={()=>{
                        alert(this.Chatting([
                            "Enter uid1234 Muzi",
                            "Enter uid4567 Prodo",
                            "Leave uid1234",
                            "Enter uid1234 Prodo",
                            "Change uid4567 Ryan"
                        ]));
                    }}>
                        <Icon type={"FontAwesome"} name={"comments"} size={40} color={COLORS.LAVENDER}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:"100%",height:100,borderRadius:10,borderWidth:1,borderColor:COLORS.LAVENDER,marginBottom:10,alignItems:"center",justifyContent:"center"}} onPress={()=>{

                    }}>
                        <Icon type={"FontAwesome"} name={"gamepad"} size={40} color={COLORS.LAVENDER}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:"100%",height:100,borderRadius:10,borderWidth:1,borderColor:COLORS.LAVENDER,marginBottom:10,alignItems:"center",justifyContent:"center"}} onPress={()=>{

                    }}>
                        <Icon type={"FontAwesome"} name={"list"} size={40} color={COLORS.LAVENDER}/>
                    </TouchableOpacity>
                </View>
            </PageContainer>
        );
    }
}
