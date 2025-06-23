import React, { Suspense } from "react";
import Banner from "../components/Home/banner";
import MoreServices from "../components/Home/MoreServices";
import Myskills from "../components/Home/Myskills";
import Projects from "../components/Home/Projects";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <Suspense
          fallback={
            <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
              <div className="h-48 rounded-t bg-gray-700 dark:bg-gray-300"></div>
              <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900 dark:bg-gray-50">
                <div className="w-full h-6 rounded bg-gray-700 dark:bg-gray-300"></div>
                <div className="w-full h-6 rounded bg-gray-700 dark:bg-gray-300"></div>
                <div className="w-3/4 h-6 rounded bg-gray-700 dark:bg-gray-300"></div>
              </div>
            </div>
          }
        >
          <MoreServices />
        </Suspense>
      </div>
      <div>
        <Myskills />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
