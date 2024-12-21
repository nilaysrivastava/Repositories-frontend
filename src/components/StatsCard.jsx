import React from "react";
import { ArrowUpIcon } from "lucide-react";
import lb from "../images/logo-b.png";
import i2 from "../images/ca-logo.png";
import p from "../images/p.png";

const StatsCard = () => {
  return (
    <div>
      <div className="relative h-[400px] w-full flex items-center justify-center">
        {/* Bottom Card */}
        <div className="absolute left-0 top-60 z-10">
          <div className="p-6 bg-white shadow-even rounded-xl w-72">
            <div className="flex items-center justify-between mb-4">
              <img src={p} alt="" />
              <div className="flex items-center text-blue-600">
                <div className="flex flex-col">
                  <div className="ml-1 flex flex-row items-center justify-center">
                    <ArrowUpIcon className="w-4 h-4" />
                    14%
                  </div>
                  <div className="ml-2 text-gray-600 text-sm">This week</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-600">Issues Fixed</h3>
              <p className="text-3xl font-bold">500K+</p>
            </div>
          </div>
        </div>

        {/* Top Card */}
        <div className="absolute top-16">
          <div className="p-6 bg-white shadow-even rounded-xl w-[500px]">
            <div className="flex justify-between items-center">
              <div className="mb-4 text-1xl font-bold flex flex-row items-center justify-center">
                <div>
                  <img src={lb} className="w-6 h-6" />
                </div>
                <div>AI to Detect and Autofix Bad Code</div>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="flex justify-between mt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold">30+</h3>
                <p className="text-gray-600">Language Support</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">10K+</h3>
                <p className="text-gray-600">Developers</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">100K+</h3>
                <p className="text-gray-600">Hours Saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0">
        <img src={i2} className="w-[250px] h-[250px]" />
      </div>
    </div>
  );
};

export default StatsCard;
