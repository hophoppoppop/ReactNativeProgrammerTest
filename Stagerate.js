
function stageRate(N,users)
{
    try{
        let answer = [];
        if(N > 0 && N<=500)
        {
            if(users.length > 0 && users.length <= 200000)
            {
                let failureRate = [];
                for(let i = 1;i<=N;i++)
                {
                    let playUsers = users.filter(s=>s >= i).length;
                    let failUsers = users.filter(s=>s === i).length;
                    failureRate.push({
                        stage: i,
                        rate: playUsers>0?failUsers/playUsers:0,
                    });
                }
                failureRate.sort((a,b)=>{
                    if(a.rate > b.rate)
                    {
                        return -1;
                    }else{
                        return 1;
                    }
                });
                answer = failureRate.map(temp=>temp.stage);
                return answer;
            }else{
                throw "user must 1 ~ 1000000 length";
            }
        }else{
            throw "level must 1 ~ 500";
        }
    }catch(e){
        return e;
    }
}