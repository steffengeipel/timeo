import React, { useState } from 'react';
import SvgEmail from '../../assets/SvgEMail';
import SvgCheck from '../../assets/SvgCheck';
import Labelinput from './labelinput';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailInput = () => {
  const [valid, setValid] = useState(false);

  const onChangeEmail = (event) => {
    var email = event.target.value;
    setValid(emailRegex.test(email));
  };

  return (
    <div className="flex items-center h-full">
      <div className="w-16 mr-2">
        <SvgEmail width={35} color="grey" />
      </div>
      <div className="w-full">
        <Labelinput
          type="email"
          placeholder="Email Adresse"
          change={onChangeEmail}
        />
      </div>
      <div className="w-16 ml-12">
        {valid && <SvgCheck width={25} color="green" fill="green" />}
      </div>
    </div>
  );
};

export default EmailInput;
// https://dribbble.com/shots/5035570-Login-page
// https://heroicons.com/
