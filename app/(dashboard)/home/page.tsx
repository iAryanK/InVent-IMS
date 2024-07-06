import CreateFolder from "@/components/dashboard/CreateFolder";
import { Plus } from "lucide-react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <CreateFolder icon={<Plus />} text="Create a Folder in Database" />
    </div>
  );
};

export default Page;
