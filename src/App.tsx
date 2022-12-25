import React, { useState } from 'react';
import { HAIR_STYLES } from './constants';
import Avatar from './Avatar';
import './App.css';

const App = () => {
   const [hairStyle, setHairStyle] = useState('noHair1');

   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setHairStyle(e.target.value);
   };

   return (
      <div>
         <h1>People DB</h1>
         <select placeholder="Choose hair style" onChange={handleChange}>
            <option value="noHair1">-- choose a hair style --</option>
            {HAIR_STYLES.map((hair, idx) => (
               <option value={hair} key={idx + 1}>
                  {hair}
               </option>
            ))}
         </select>
         <Avatar hairStyle={hairStyle} />
      </div>
   );
};

export default App;
