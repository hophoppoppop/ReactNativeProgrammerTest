
function Chatting(record){
    try{
        let answer = [];
        let listCommend = ["Enter","Change","Leave"];
        if(record.length > 0 && record.length <= 100000)
        {
            let tempId = [];
            let tempComment = [];
            let checkError = "";

            record.map((temp,index)=>{
                let splittedComment = temp.split(" ");
                tempComment.push({
                    comment: splittedComment[0],
                    id: splittedComment[1]
                });
                if(listCommend.filter(s=>s === splittedComment[0]).length > 0)
                {
                    if(splittedComment[0] === "Enter" || splittedComment[0] === "Change")
                    {
                        if(splittedComment.length > 2 && splittedComment[2].charAt(0) === splittedComment[2].charAt(0).toUpperCase())
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
                        }else{
                            throw "Name is unrecognized"
                        }
                    }
                }else{
                    throw "Commend is undefined!";
                }
            });
            tempComment.map((value)=>{
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
            });

            return answer;
        }else{
            throw "record must 1 ~ 1000000 length";
        }
    }catch(err){
        return err;
    }
}