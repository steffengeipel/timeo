import { NextPage } from 'next';
import React, { useState } from 'react';
import Labelinput from '@components/inputs/labelinput';
import SvgCheck from '@svg/SvgCheck';
import SvgShieldWarnung from '@svg/SvgSchieldWarning';
import SvgLock from '@svg/SvgLock';

const pwRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)

const PasswordInput: NextPage = ({ label }) => {
  const [valid, setValid] = useState(false);

  const onChangePassword = (password: string): void => {
    setValid(pwRegex.test(password));
  };

  return (
    <div className="flex items-center h-full">
      <div className="w-16 mr-2">
        <SvgLock width={35} color="grey" />
      </div>
      <div className="w-full">
        <Labelinput
          type="password"
          placeholder={label ?? 'Passwort'}
          onChange={(e) => {
            onChangePassword(e.target.value);
          }}
        />
      </div>
      <div className="w-16">
        {valid ? (
          <SvgCheck width={25} color="green" fill="green" />
        ) : (
          <SvgShieldWarnung width={30} color="white" fill="red" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
