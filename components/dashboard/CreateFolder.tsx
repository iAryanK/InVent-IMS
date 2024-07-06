import React from "react";
import { text } from "stream/consumers";

type Props = {
  icon?: any;
  text?: string;
};

const CreateFolder = (props: Props) => {
  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-zinc-700">
        <p className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 p-5">
          {props.icon}
          <p className="">{props.text}</p>
        </p>
      </div>
    </div>
  );
};

export default CreateFolder;
