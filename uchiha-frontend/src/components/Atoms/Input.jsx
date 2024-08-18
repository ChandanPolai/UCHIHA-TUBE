import React, { useId } from "react";

function Input(
  { label, type = "text", required = false, className = "", labelClassName = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={id}
          className={`mb-1 inline-block dark:text-gray-300 text-black ${labelClassName}`}
        >
          {required && <span className=" text-red-600 text-l">* </span>}
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        className={`rounded-lg border bg-transparent px-3 py-2 ${className}`}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
