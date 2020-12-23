import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import EmailInput from '../components/inputs/emailInput';
import PasswordInput from '../components/inputs/passwordinput';

const Login: NextPage = () => {
  return (
    <div className="h-screen flex items-center p-4">
      {/* Picture */}
      <div className="place-self-center w-1/2"></div>
      {/* Login */}
      <div className="w-1/2">
        <h1 className="h1 place-self-center mb-4">Willkommen zurück!</h1>
        <span>Bitte loggen Sie sich ein.</span>
        <div className="p-2 mt-10 bg-white shadow rounded">
          <div className="h-16 p-3">
            <EmailInput />
          </div>
          <div className="h-16 p-3">
            <PasswordInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
