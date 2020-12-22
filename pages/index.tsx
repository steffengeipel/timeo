import Nav from '../components/nav'
import SvgTime from '@svg/time.svg'

// Landingpage
export default function IndexPage() {
  return (
    <div id='maindiv' className='h-screen'>
      <Nav />
      <div className='py-20'>
        <h1 className='text-5xl text-center text-gray-700 dark:text-gray-100'>
          Next.js + Tailwind CSS 2.0
        </h1>
        <SvgTime></SvgTime>
      </div>
      <style jsx>{`
        #maindiv {
          background-color: rgb(233, 239, 248);
        }
      `}</style>
    </div>
  )
}
