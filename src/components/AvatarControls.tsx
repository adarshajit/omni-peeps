import { memo } from 'react';
import { Control, Controller, UseFormSetValue } from 'react-hook-form';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import SelectField from './SelectField';
import { SELECT_FIELD_PROPS } from '@/constants/selectFieldProps';
import { IAvatarStyle } from '@/types';

interface AvatarControlsProps {
  control: Control<IAvatarStyle>;
  setValue: UseFormSetValue<IAvatarStyle>;
}

const AvatarControls = memo(({ control, setValue }: AvatarControlsProps) => {
  const handleSideEffects = (feature: string, value: string) => {
    if (feature === 'accessories') {
      setValue('accessoriesProbability', value ? 100 : 0);
    }
    if (feature === 'facialHair') {
      setValue('facialHairProbability', value ? 100 : 0);
    }
    if (feature === 'mask') {
      setValue('maskProbability', value ? 100 : 0);
    }
  };

  return (
    <div className="lg:col-span-8">
      <Card>
        <CardContent className="p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SELECT_FIELD_PROPS.map((item) => (
              <div key={item.feature} className="space-y-2">
                <Label className="capitalize">
                  {item.feature.replace(/([A-Z])/g, ' $1').trim()}
                </Label>
                <Controller
                  control={control}
                  name={item.feature as keyof IAvatarStyle}
                  render={({ field }) => (
                    <SelectField
                      placeholder={item.placeholder}
                      handleChange={(value) => {
                        field.onChange(value);
                        handleSideEffects(item.feature, value);
                      }}
                      value={field.value as string}
                      optionItems={item.optionItems}
                    />
                  )}
                />
              </div>
            ))}
          </form>
        </CardContent>
      </Card>
    </div>
  );
});

AvatarControls.displayName = 'AvatarControls';

export default AvatarControls;
