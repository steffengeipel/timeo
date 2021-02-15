import { NextPage } from 'next';
import React from 'react';
import EmailInput from '@components/inputs/emailInput';
import NewPasswordInput from '@components/inputs/newpasswordinput';

const SignUp: NextPage = () => (
  <div className="h-screen flex">
    <div className="m-auto text-center">
      <h1 className="h1">Herzlich Willkommen auf timeo!</h1>
      <span className="">Bitte loggen Sie sich ein.</span>
      <div className="shadow-lg rounded bg-white p-5 space-y-5">
        <EmailInput />
        <NewPasswordInput />
      </div>
    </div>
  </div>
);

export default SignUp;
