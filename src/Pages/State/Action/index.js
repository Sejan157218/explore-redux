export const depositedAmount=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"deposit",
            payload:amount,
        })
    }
}
export const withdrewAmount=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"withdraw",
            payload:amount,
        })
    }
}