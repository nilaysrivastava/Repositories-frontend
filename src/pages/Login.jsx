import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaBitbucket, FaGitlab } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import Button from "../components/common/Button";
import lb from "../images/logo-b.png";
import StatisticsCard from "../components/StatsCard";

const Login = () => {
  const [selectedTab, setSelectedTab] = useState("saas");
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/repositories");
  };

  const renderSignInOptions = () => {
    if (selectedTab === "saas") {
      return (
        <>
          <Button
            icon={<FaGithub className="text-gray-800 text-2xl" />}
            label="Sign in with GitHub"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-extrabold"
          />
          <Button
            icon={<FaBitbucket className="text-blue-600 text-2xl" />}
            label="Sign in with Bitbucket"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-extrabold"
          />
          <Button
            icon={<VscAzureDevops className="text-blue-500 text-2xl" />}
            label="Sign in with Azure DevOps"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-extrabold"
          />
          <Button
            icon={<FaGitlab className="text-orange-600 text-2xl" />}
            label="Sign in with GitLab"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-extrabold"
          />
        </>
      );
    } else {
      return (
        <>
          <Button
            icon={<FaGitlab className="text-orange-600 text-2xl" />}
            label="Self Hosted GitLab"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-extrabold"
          />
          <Button
            icon={<FaGithub className="text-gray-800 text-2xl" />}
            label="Sign in with SSO"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-extrabold"
          />
        </>
      );
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="sm:hidden md:flex lg:flex w-1/2 bg-white p-12 relative items-center justify-center">
        <StatisticsCard />
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 md:w-1/2 w-full bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="w-full h-[28rem] max-w-md bg-white rounded-xl drop-shadow-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="mb-4 text-1xl font-bold flex flex-row items-center justify-center">
              <div>
                <img src={lb} className="w-6 h-6" alt="CodeAnt AI Logo" />
              </div>
              <div>CodeAnt AI</div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome to CodeAnt AI
            </h1>
          </div>

          <div className="flex gap-4 mb-8">
            <Button
              label="SAAS"
              onClick={() => setSelectedTab("saas")}
              className={`flex-1 ${
                selectedTab === "saas"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            />
            <Button
              label="Self Hosted"
              onClick={() => setSelectedTab("selfhosted")}
              className={`flex-1 ${
                selectedTab === "selfhosted"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            />
          </div>

          <div className="space-y-3">{renderSignInOptions()}</div>
        </div>
        <div>
          <p className="mt-8 text-center text-black">
            By signing up you agree to the{" "}
            <a href="#" className="text-gray-900 font-extrabold">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
