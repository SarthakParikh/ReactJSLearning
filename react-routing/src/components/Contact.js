import React, { useState } from "react";
import { addData } from "../Action/addData";
import { useDispatch } from "react-redux";
import shortid from "shortid";
const Contact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const onClickHandeller = (e) => {
    e.preventDefault()
    dispatch(addData({ name: name, email: mail, id: shortid.generate() }));


  };

  return (
    <div>
      Contact
      <form>
      
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="Email"
          placeholder="Email"
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        ></input>
        <button onClick={onClickHandeller}>Add Data</button>
      </form>
    </div>
  );
};

export default Contact;
