import React, { useState } from 'react'
import { IconBrandGithub, IconBrandLinkedin, IconFileInfo, IconQuestionMark, IconX } from '@tabler/icons-react'

const About = () => {
  const [isViewing, setIsViewing] = useState(false)
  return (
    <div>
      {!isViewing ? (
        <button
          className='absolute bottom-0 mb-4'
          onClick={() => setIsViewing(true)}
        >
          <IconQuestionMark />
        </button>
      ) : (
        <div className='absolute top-0 left-0 m-auto w-full h-full z-20 grid place-items-center overflow-hidden bg-black/60 font-mono'>
          <div className='relative bg-black border p-4 border-neutral-900'>
            <div className='flex justify-between'>
              <h1 className='font-bold text-lg'>About</h1>
              <button
                className='hover:text-white transition-all'
                onClick={() => setIsViewing(false)}
              >
                <IconX />
              </button>
            </div>
            <div>
              <hr className='my-4 border-neutral-900' />
              <h2>Hi! I'm Joaquin, the creator of this Website</h2>
              <p>Here are some of the ways to contact and get to know me:</p>
              <ul className='mt-4'>
                <li className='flex hover:text-white transition-all'>
                  <IconBrandGithub className='mr-4' />{' '}
                  <a
                    href='https://github.com/JoaquinBatser'
                    target='_blank'
                  >
                    Github
                  </a>
                </li>

                <li className='flex hover:text-white transition-all'>
                  <IconFileInfo className='mr-4' />
                  <a
                    href='https://joaquin-batista.netlify.app/'
                    target='_blank'
                  >
                    My Portfolio
                  </a>
                </li>
                <li className='flex  hover:text-white transition-all'>
                  <IconBrandLinkedin className='mr-4' />
                  <a
                    href='https://www.linkedin.com/in/joaquin-david-batista-servetti-121173255/'
                    target='_blank'
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
