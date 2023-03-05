const is = {}
export const dataReducer = (state = is, action) => {
  console.log(state, action, "Data Reducer");

  switch (action.type) {
    case "addData":{
        console.log(action, "data reducer");
        return{
            ...state,
            data:[action.payload]
        }
    }
      
    
    default:
      return;
  }
};
