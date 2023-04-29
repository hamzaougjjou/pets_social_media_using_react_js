import React from 'react'


function Page2( {initState , setInitState , data} ) {

  // console.log(data);
  // console.log("page 2 " , initState );
  
  const updateBirthDay = (e)=>{
    
  }

  return (
    <div className='sub-reg-c'>
      <label>Type : </label>
      <select >
      {
        data.breeds.map( (breed , index)=> <option key={index} value={breed.id} > { breed.name } </option> )
      }
      </select>

      <label>Gender : </label>
      <select>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Birthday : </label>
      <input type="date" name="birthday"
        placeholder="dd-mm-yyyy"
        max="2030-12-31"  onChange={ updateBirthDay }></input>
    </div>

  );
}

export default Page2