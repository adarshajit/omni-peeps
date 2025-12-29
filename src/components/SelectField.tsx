import React from 'react';
import { ISelectField } from '@/types';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';

const SelectField = React.memo(({
   placeholder,
   handleChange,
   value,
   optionItems,
}: ISelectField) => {
   return (
      <Select onValueChange={handleChange} value={value}>
         <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
         </SelectTrigger>
         <SelectContent>
            {optionItems.map((item) => {
               const value = typeof item === 'string' ? item : item.value;
               const label = typeof item === 'string' ? item : item.label;
               return (
                  <SelectItem value={value} key={value}>
                     {label}
                  </SelectItem>
               );
            })}
         </SelectContent>
      </Select>
   );
});

SelectField.displayName = 'SelectField';

export default SelectField;
