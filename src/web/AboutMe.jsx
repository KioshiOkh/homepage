import React from 'react';
import styles from '../style';
import {html, css, python, java, reactpic} from '../assets'


const AboutMe = () => {
  return (
    <layout>
      <section id="about" className="flex-col py-16 bg-primary">
        <div className={`${styles.boxWidth} container mx-auto px-4 lg:px-8`}>
          <div className="flex flex-col items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">About Me</h2>
              <p className="text-lg lg:text-xl text-white">
              Hi, ich bin Paul! Ich begeistere mich für das Entwickeln von coolen Apps und Websites. Hier sind ein paar Dinge, die du über mich wissen solltest:
              </p>
            </div>
            <div className="md:w-1/2 mt-5">
              <ul className="list-disc ml-6 text-lg lg:text-xl text-white">
                <li className="mb-2">- Ich code hobbymäßig und liebe es, neue Technologien zu erforschen.</li>
                <li className="mb-2">- Wenn ich nicht am Computer bin, verbringe ich meine Zeit gerne mit Musik hören und Volleyball spielen.</li>
                <li className="mb-2">- Mein Ziel ist es, Produkte zu entwickeln, die das Leben erträglicher machen.</li>
              </ul>
            </div>
          </div>
          <div className='flex sm:flex-row flex-col justify-center items-center shadow lg:h-[20vh] sm:mt-10 md:mt-5'>
            <div className='flex justify-center items-center shadow-xl rounded-xl h-[150px] w-[150px] mb-2 mt-3 sm:mr-8 app'>
              <img src={html} alt='html' className='h-[100px]'/>
            </div>
            <div className='flex justify-center items-center shadow-xl rounded-xl h-[150px] w-[150px] mb-2 mt-3 app'>
              <img src={reactpic} alt='react' className='w-[128px]'/>
            </div>
            <div className='flex justify-center items-center shadow-xl rounded-xl h-[150px] w-[150px] mb-2 mt-3 sm:ml-8 app'>
              <img src={css} alt='css' className='h-[100px]'/>
            </div>
          </div>
          <div className='flex sm:flex-row flex-col justify-center items-center'>
              <div className='flex justify-center items-center shadow-xl rounded-xl h-[150px] w-[150px] mb-2 mt-3 sm:ml-8 app'>
                <img src={java} alt='css' className='h-[100px]'/>
              </div>
              <div className='flex justify-center items-center shadow-xl rounded-xl h-[150px] w-[150px] mb-2 mt-3 sm:ml-8 app'>
                <img src={python} alt='css' className='h-[100px]'/>
              </div>
            </div>
        </div>
      </section>
    </layout>
  )
}

export default AboutMe;
