type Props = {};

import { BsSun } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiError, BiShareAlt } from "react-icons/bi";

const HomePage = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold  mb-20">ChatGPT</h1>
      <div className="flex items-center justify-center space-x-8 space-y-6">
        <div className="w-[230px] h-[314px]">
          <div className="flex flex-col items-center space-y-2">
            <BsSun size={30} />
            <p className="text-xl">Examples</p>
          </div>
          <div className="">
            <p className="card">
              "Explain quantum computing in simple terms" &rarr;
            </p>
            <p className="card">
              "Got any creative ideas for a 10 ear old's birthday?"&rarr;
            </p>
            <p className="card">
              "How do I make an HTTP request in JavaScript"&rarr;
            </p>
          </div>
        </div>
        <div className="w-[230px] h-[314px]">
          <div className="flex flex-col items-center">
            <AiOutlineThunderbolt size={30} />
            <p>Capabilities</p>
          </div>
          <div>
            <p className="card">
              Remembers what user said earlier in the conversation
            </p>
            <p className="card">Allows user to provide follow-up corrections</p>
            <p className="card">Trained to decline inappropriate requests</p>
          </div>
        </div>
        <div className="w-[230px] h-[314px]">
          <div className="flex flex-col items-center">
            <BiError size={30} />
            <p>Limitations</p>
          </div>
          <div>
            <p className="card">
              May occasionally generate incorrect information
            </p>
            <p className="card text-sm">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="card">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
      <div className="flex border p-1  items-center justify-center rounded-md">
        <BiShareAlt size={20} />
        <p>share</p>
      </div>
    </div>
  );
};

export default HomePage;
