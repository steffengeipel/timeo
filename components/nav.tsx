import Link from 'next/link'
import SvgLogo from '@svg/Logo_small.svg'

export default function Nav() {
  return (
    <nav>
      <ul className='flex items-center justify-between p-8'>
        <li>
          <SvgLogo></SvgLogo>
        </li>
        <ul className='flex items-center justify-between space-x-4'>
          <li key={`LogIn`}>
            <button className='no-underline bg-white py-4 px-4 text-blue rounded-lg w-24'>
              Log In
            </button>
          </li>
          <li key={`SingUp`}>
            <button className='no-underline bg-blue-700 py-4 px-4 text-white rounded-lg w-24'>
              Sing Up
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  )
}
