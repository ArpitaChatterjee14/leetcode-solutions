// 771. Jewels and Stones - Leetcode Question
const jewelsInStones = (jewels,stones) =>
{
    let count=0;
    for(let i=0;i<jewels.length;i++){
        for(let j=0;j<stones.length;j++){
            if (jewels.substring(0+i,i+1) === stones.substring(0+j,j+1))
                count++;
        }
    } 
    return `stone has ${count} jewels`;
}
const res = jewelsInStones('b','aAAbb');

console.log(res);
