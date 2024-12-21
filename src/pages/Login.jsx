import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import lb from "../images/logo-b.png";
import StatisticsCard from "../components/StatsCard";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const BitbucketIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M.778 1.211c-.424-.006-.772.334-.778.758 0 .045.002.089.008.133l3.263 19.811c.084.499.515.867 1.022.872h15.436c.382.004.708-.271.777-.648l3.263-20.035c.064-.397-.204-.771-.601-.835-.038-.007-.077-.01-.115-.01H.778zM14.787 15.62H9.252l-1.293-6.727h7.878l-1.05 6.727z" />
  </svg>
);

const AzureIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.647 14.886l-4.918-9.325-1.706 5.654L14.817 15l-11.764.424L17.647 0 24 20.177l-6.353-5.291zm-14.588-2.29l6.353-.212L0 1.416l3.059 11.18z" />
  </svg>
);

const GitLabIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.45.045 13.587a.924.924 0 00.331 1.023L12 23.054l11.624-8.443a.92.92 0 00.331-1.024" />
  </svg>
);

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
            icon={<GitHubIcon />}
            label="Sign in with Github"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
          />
          <Button
            icon={<BitbucketIcon />}
            label="Sign in with Bitbucket"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
          />
          <Button
            icon={<AzureIcon />}
            label="Sign in with Azure Devops"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
          />
          <Button
            icon={<GitLabIcon />}
            label="Sign in with GitLab"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
          />
        </>
      );
    } else {
      return (
        <>
          <Button
            icon={<GitLabIcon />}
            label="Self Hosted GitLab"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
          />
          <Button
            icon={
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                  fill="currentColor"
                />
              </svg>
            }
            label="Sign in with SSO"
            onClick={handleSignIn}
            className="w-full bg-white border border-gray-300 text-gray-900 hover:bg-gray-50"
          />
        </>
      );
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-white p-12 relative flex items-center justify-center">
        <StatisticsCard />
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="w-full h-[27rem] max-w-md bg-white rounded-xl drop-shadow-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="mb-4 text-1xl font-bold flex flex-row items-center justify-center">
              <div>
                <img src={lb} className="w-6 h-6" />
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
          <p className="mt-8 text-center text-sm text-gray-600">
            By signing up you agree to the{" "}
            <a href="#" className="text-gray-900 font-medium">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
