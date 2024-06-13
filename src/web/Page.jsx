import {icon} from "../assets"

const Page = () => {
  return (
    <layout>
      <section id="home" className="bg-primary flex justify-center items-center">
        <div className="xl:max-w-7xl w-full">
          <div className="flex justify-center items-center">
            <img src={icon} alt="logo" className="rounded-xl bg-transparent opacity-30 hover:opacity-50"/>
          </div>
          <div className="flex flex-col relative bottom-28 items-center">
            <h1 class="text-5xl lg:text-6xl font-bold mb-4 maintitle">Paul's Hompage</h1>
            <p class=" font-normal text-[18px] text-white">Hier entsteht einzigartiger much.</p>
          </div>
        </div>
        <br className="mb-80"></br>
      </section>
    </layout>
  );
};

export default Page;