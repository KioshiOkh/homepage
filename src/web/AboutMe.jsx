import React from 'react';
import styles from '../style';


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
        </div>
      </section>
    </layout>
  )
}

export default AboutMe;
