
function candidateKey(relation){
    try{
        let answer = 0;
        let isDuplicate = (array)=>{
            for(let i =0;i<array.length;i++)
            {
                for(let j =i+1;j<array.length;j++){
                    if(array[i] === array[j])
                    {
                        return true;
                    }
                }
            }
            return false;
        };
        let getCombination = (array)=>{
            let result = [];
            let f = (prefix=[], array)=>
            {
                for (let i = 0; i < array.length; i++)
                {
                    result.push([...prefix,array[i]].join().replace(/,/g,"")); f([...prefix,array[i]], array.slice(i + 1));
                }
            };
            f('', array);
            return result;
        };

        let getCol = (matrix, col)=>{
            let column = [];
            for(let i=0; i<matrix.length; i++){
                column.push(matrix[i][col]);
            }
            return column;
        };
        if(relation.length > 0 && relation.length <= 8)
        {
            let rowLength = relation[0].length;
            let combinationArray = [];
            relation.map((curr,index)=>{
                if(curr.length > 0 && curr.length === rowLength && curr.length <=20)
                {
                    combinationArray.push(getCombination(curr));
                }else{
                    throw "record row must 1 ~ 20 length";
                }
            });
            let possibleLength = combinationArray[0].length;
            let currStop = (combinationArray[0].length+1)/2;
            let currRange = currStop;
            for(let i = 0;i<possibleLength;i++)
            {
                if(!isDuplicate(getCol(combinationArray,i)))
                {
                    answer++;
                    i = currStop-1;
                    currRange/=2;
                    currStop+=currRange;
                }
            }
            return answer;
        }else{
            throw "record must 1 ~ 8 length";
        }
    }
    catch(e){
        return e;
    }
}