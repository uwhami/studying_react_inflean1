import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("W");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름 : ${name}, 성별: ${gender}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름 :
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      성별 :
      <select value={gender} onChange={handleChangeGender}>
        <option value="M">남자</option>
        <option value="W">여자</option>
        <option value="N">중성</option>
      </select>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
