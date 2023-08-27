export function findWinner(boxes){
    const row=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6]
    ]

    for(let i=0;i<row.length;i++){
        const [a,b,c] = row[i]
        if(boxes[a] && boxes[a]===boxes[b] &&boxes[b]===boxes[c]){
            return boxes[a]
        }
    }
    return null
}

export function isBoxesFilled(boxes){
    let count=0
    boxes.forEach(function(item){
        if(item!==null){
            count+=1
        }
    })
    if(count===9){
        return true
    }else{
        return false
    }
}