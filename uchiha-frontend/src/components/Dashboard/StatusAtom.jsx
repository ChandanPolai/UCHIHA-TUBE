import React from "react";

function StatusAtom({ title, value, icon }) {
  return (
    <div className="border p-4">
      <div className="mb-4 block">
        <span className="inline-block h-7 w-7 rounded-full dark:bg-[#E4D3FF] p-1 bg-[#fa8888] text-red-800 dark:text-[#ae7aff] drop-shadow ">
          {icon}
        </span>
      </div>
      <h6 className="dark:text-gray-300 text-zinc-500 ">{title}</h6>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );
}

export default StatusAtom;
