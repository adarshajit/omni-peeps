import { ISelectField } from '../types';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';

const SelectField = ({
   placeholder,
   handleChange,
   defaultValue,
   optionItems,
}: ISelectField) => {
   return (
      <Select onValueChange={handleChange} defaultValue={defaultValue}>
         <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
         </SelectTrigger>
         <SelectContent>
            {optionItems.map((item, idx) => (
               <SelectItem value={item} key={idx}>
                  {item}
               </SelectItem>
            ))}
         </SelectContent>
      </Select>
   );
};

export default SelectField;
