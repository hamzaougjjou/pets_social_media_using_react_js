import React from 'react'


function Page2() {
  return (
    <div className='sub-reg-c'>
      <label>Type : </label>
      <select>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="sish">Fish</option>
        <option value="bird">Bird</option>
      </select>
      <label>Gender : </label>
      <select>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label>Birthday : </label>
      <input type="date" name="birthday"
        placeholder="dd-mm-yyyy"
        max="2030-12-31"></input>
    </div>

  );
}

export default Page2