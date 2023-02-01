import links from '@modules/shared/links'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="mx-auto flex min-h-screen w-screen flex-col bg-fuchsia-200 font-cubano text-gray-900">
      <div className="mt-12 text-center">
        <img
          className="mx-auto h-32 w-32 rounded-full border-4 border-gray-900"
          src="https://avatars.githubusercontent.com/u/65483182?v=4"
          alt="Profile"
        />

        <p className="mt-4 text-2xl ">Arif Rahmanulhakim</p>
      </div>

      <div className="mx-auto mt-12 w-full max-w-sm flex-1 space-y-4 px-4">
        {links.map((link, index) => {
          return (
            <a
              href={link.url}
              target="_blank"
              key={String(index)}
              className={`umami--click--link-${link.name} link-button 
              flex h-12 w-full items-center justify-center 
              space-x-4 rounded-lg border-2 border-gray-900 bg-white  
              text-center font-bold tracking-wider`}
            >
              {link.icon}
              <div>{link.name}</div>
            </a>
          )
        })}
      </div>
      <p className="py-4 text-center font-cubano text-xs font-semibold tracking-wider">
        Copyright © {new Date().getFullYear()} | ARH • Built by ARHOLIC
      </p>
    </div>
  )
}

export default Home
