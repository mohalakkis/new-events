import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputText from '../atoms/DefaultText';
import DefaultLabel from '../atoms/DefaultLabel';

const DateInput = () => {
  const [date, setDate] = useState(new Date());
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const onSelect = (event, newDate) => {
    setIsPickerOpen(false);
    setDate(newDate);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setIsPickerOpen(true)}
      >
        <DefaultLabel>NASCIMENTO</DefaultLabel>
        <InputText>
          {moment(date).format('DD/MM/YYYY')}
        </InputText>
      </TouchableOpacity>
      {isPickerOpen && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onSelect}
        />
      )}
    </>
  );
};

export default DateInput;
