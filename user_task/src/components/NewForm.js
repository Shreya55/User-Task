import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { NewFormContext } from "./contexts/NewFormContext";

export const NewForm = () => {
  const initial = {
    name: "",
    age: "",
    city: "",
    phno: "",
  };
  const [data, setData] = useState(initial);
  const { addData } = useContext(NewFormContext);

  const onChangeHandler = (e) => {
    setData({
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newData = {
      id: Math.random(),
      name: data.name,
      age: data.age,
      city: data.city,
      phno: data.phno,
      show: false,
    };

    addData(newData);

    setData("");
  };

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          width: 320,
          marginLeft: 350,
          marginTop: 80,
          height: 500,
        }}
      >
        <form
          noValidate
          autoComplete="off"
          style={{ marginTop: 20, marginLeft: 45 }}
        >
          <TextField
            id="outlined-basic"
            value={data.name}
            name="name"
            label="Name"
            variant="outlined"
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-basic"
            value={data.age}
            name="age"
            label="Age"
            variant="outlined"
            style={{ marginTop: 20 }}
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-basic"
            value={data.city}
            name="city"
            label="City"
            variant="outlined"
            style={{ marginTop: 20 }}
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-basic"
            value={data.phno}
            name="phno"
            label="Phone Number"
            variant="outlined"
            style={{ marginTop: 20 }}
            onChange={onChangeHandler}
          />
          <Button
            variant="contained"
            style={{ margin: "inherit" }}
            type="submit"
            onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
