import styles, {layout} from "../style"

const AboutMe = () => {
  return (
    <section id="#about" className={`${layout.section} py-16 bg-primary`}>
      <div className={`${styles.boxWidth} container mx-auto px-4 lg:px-8`}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-lg lg:text-xl text-white">
              Hi, I'm [Your Name]! I'm a passionate [Your Profession] with [X years] of experience in [Your Field]. I love
              [What You Love Doing], and I'm dedicated to [Your Mission or Goal]. Here are a few more things about me:
            </p>
          </div>
          <div className="md:w-1/2">
            <ul className="list-disc ml-6 text-lg lg:text-xl text-white">
              <li className="mb-2">- I graduated from [Your University/Institution] with a degree in [Your Degree].</li>
              <li className="mb-2">- I specialize in [Your Specialization/Area of Expertise].</li>
              <li className="mb-2">- In my free time, I enjoy [Your Hobbies/Interests].</li>
              <li className="mb-2">- I'm proficient in [Your Skills/Technologies].</li>
              <li className="mb-2">- I'm always eager to learn and grow in my field.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe