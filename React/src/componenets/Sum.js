function Sum(){
    const arr=[1,2,3,4,5]
    let res=0
    for(let i=0;i<arr.length;i++){
        res=res+arr[i]
    }
    return(
        <h1>{res}</h1>

    )
}
export default Sum;
