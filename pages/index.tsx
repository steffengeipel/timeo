import Nav from '../components/nav'

// Landingpage
export default function IndexPage() {
  return (
    <div id='maindiv' className='h-screen'>
      <Nav />
      <div className='py-20'>
        <h1 className='text-5xl text-center text-gray-700 dark:text-gray-100'>
          Next.js + Tailwind CSS 2.0
        </h1>
      </div>
      <style jsx>{`
        #maindiv {
          background-color: #03103b;
          background-image: linear-gradient(
            135deg,
            rgba(64, 219, 216, 0.15) 0%,
            rgba(3, 16, 59, 0.15) 35%
          );
        }
      `}</style>
    </div>
  )
}
