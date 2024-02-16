let styles = {
    textDecorationLine: 'line-through',
}
function Price({oldprice,newprice}){
    return(
        <>
        <span style={styles}>{oldprice}</span>
        &nbsp; &nbsp; &nbsp; &nbsp; 
        <span>{newprice}</span>
        </>
    )
}
export default Price;