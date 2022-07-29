import React from "react";

type Props = {
  text?: string;
  number?: number;
  password?: string;
  type: string;
  name: string;
};

const TextField: React.FC<Props> = () => {
  return (
    <div className="p-3">
      <input className="border-2 border-blue-500 w-[30em] h-[3em] outline-offset-2 outline-blue-600" />
    </div>
  );
};
export default TextField;
