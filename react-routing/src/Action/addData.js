// export const addData = (data) => {
//   console.log(data);

 

//   {
//     type: "addData";

//     payload: data;
//   }
// };


export const addData = (data) => (
    console.log(data),
    {
      type: "addData",
  
      payload: data,
    }
  )