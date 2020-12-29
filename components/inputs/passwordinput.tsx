import { NextPage } from 'next'
import React, { useState } from 'react'
import SvgCheck from '../../assets/SvgCheck'
import SvgLock from '../../assets/SvgLock'
import Labelinput from './labelinput'

const pwRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)

const EmailInput: NextPage = () => {
  const [valid, setValid] = useState(false)

  const onChangePassword = (event) => {
    var password = event.target.value
    setValid(pwRegex.test(password))
  }

  return (
    <div className='flex items-center h-full'>
      <div className='w-16 mr-2'>
        <SvgLock width={35} color={'grey'} />
      </div>
      <div className='w-full'>
        <Labelinput
          type='password'
          placeholder='Passwort'
          onChange={() => onChangePassword}
        />
      </div>
      <div className='w-16 ml-12'>
        {valid && <SvgCheck width={25} color='green' fill='green' />}
      </div>
    </div>
  )
}

export default EmailInput
