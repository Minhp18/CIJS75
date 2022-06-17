const mostFrequent = arr => {
    let mf=1
    let m=0
    let item=0
    for (let i=0; i<arr.length; i++){
        for (let j=i; j<arr.length; j++){
            if (arr[i]==arr[j]){
                m++
            }
            if (mf<m){
                mf=m
                item=arr[i]
            }
        }
        m=0
    }
    console.log(`{value: ${item}, count: ${mf}}`)
}
mostFrequent([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3])