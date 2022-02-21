// eslint-disable-next-line no-undef
export default reducer = (state = 0, action) => {
  if (action.payload === "deposit") {
    return state + action.amount;
  }
  else if(action.payload === "withdraw") {
    return state - action.amount;
  }
  else{
      return state;
  }
};