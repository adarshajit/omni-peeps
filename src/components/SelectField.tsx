import { ISelectField } from '../../utils/interfaces';

const SelectField = ({
   placeholder,
   handleChange,
   defaultValue,
   optionItems,
}: ISelectField): any => {
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
