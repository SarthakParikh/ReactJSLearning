const is = {data:[]}
export const dataReducer = (state = is, action) => {
  console.log(state, action, "Data Reducer");

  switch (action.type) {
    case "addData":{
        console.log(action, "data reducer");
        return{
            ...state,
            data:[action.payload, ...state.data]
        }
    }
      
    
    default:
      return state;
    
  }
};
