import React, { useState } from "react";
import { addData } from "../Action/addData";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { delData } from "../Action/delData";
const Contact = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data.data);
  console.log(selector, "selecter Data");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const onClickHandeller = (e) => {
    e.preventDefault();
    dispatch(addData({ name: name, email: mail, id: shortid.generate() }));
    setName("");
    setMail("");
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
      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>

            <th>Mail</th>
          </thead>
          <tbody>
            {selector.map((data) => (
              <tr>
                <td>{data.id}</td>

                <td>{data.name}</td>

                <td>{data.email}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(delData(data.id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
