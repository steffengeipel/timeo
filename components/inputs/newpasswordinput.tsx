import { NextPage } from 'next';
import React, { useState } from 'react';
import PasswordInput from '@components/inputs/passwordinput';

const NewPasswordInput: NextPage = () => {
  const [valid, setValid] = useState(false);

  const onChangePassword = (password: string): void => {
    // setValid(pwRegex.test(password));
  };

  return (
    <div className="flex flex-col items-center h-full space-y-4">
      <div className="w-full">
        <PasswordInput />
      </div>
      <div className="w-full">
        <PasswordInput label="Passwort wiederholen" />
      </div>
    </div>
  );
};

export default NewPasswordInput;
