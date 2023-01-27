import { ISelectField } from '../types';

const SelectField = ({
   placeholder,
   handleChange,
   defaultValue,
   optionItems,
}: ISelectField) => {
   return (
      <select onChange={handleChange}>
         <option value={defaultValue}>-- {placeholder} --</option>
         {optionItems.map((item, idx) => (
            <option value={item} key={idx + 1}>
               {item}
            </option>
         ))}
      </select>
   );
};

export default SelectField;
