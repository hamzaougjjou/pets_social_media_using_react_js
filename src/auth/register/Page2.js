import React from 'react'
import { useSelector } from 'react-redux';


function Page2( props ) {

  const regState = useSelector(state => state.RegisterReducer);
  console.log(props.data);
  const updateBirthDay = (e)=>{
    
  }

  return (
    <div className='sub-reg-c'>
      <label>Type : </label>
      <select >
      {
        props.data.breeds.map( (breed , index)=> <option key={index} value={breed.id} > { breed.name } </option> )
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
        max="2030-12-31" value={ regState.birthday } onChange={ updateBirthDay }></input>
    </div>

  );
}

export default Page2