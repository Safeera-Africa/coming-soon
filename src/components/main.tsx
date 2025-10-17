import React from "react";

const Main = () => {
  return (
    <main
      className="bg-primary p-5 flex-1 text-center text-white font-sans bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="font-bold max-w-[960px] mx-auto text-left">We’re almost there</p>
      <h1 className="text-5xl sm:text-9xl font-bold uppercase">Coming Soon</h1>
      <p className="mt-6 text-[14px]">Join our newsletter to be the first to know when Safera launches.</p>
      <form className="flex flex-col gap-4 mt-4 text-[14px] max-w-[480px] mx-auto">
        <label className="self-start" htmlFor="emailInput">Email*</label>
        <input required className="bg-[#d0d5dd] w-full mx-auto p-4 rounded border border-white text-gray-900 :hover-outline" type="email" id="emailInput" />
        <div className="flex max-sm:flex-col items-center justify-center gap-6 mt-6">
          <label htmlFor="" className="flex items-center justify-center gap-3">
            <input type="checkbox" checked required />
            <p>Yes, subscribe me to your newsletter.*</p>
          </label>
          <button className="bg-[#3F51B5] py-[17px] px-[43px] rounded-md">Sign Up</button>
        </div>
      </form>
    </main>
  );
};

export default Main;
