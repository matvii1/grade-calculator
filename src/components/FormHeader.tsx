import { FC } from "react";
import { Separator } from "./ui/separator";

const FormHeader: FC = () => {
  return (
    <div className="mt-4 flex gap-2 rounded-md border-2 border-slate-700 bg-slate-900 py-2 text-white">
      <p className="flex-1 pl-2">Grade %</p>
      <Separator orientation="vertical" className="h-6" />
      <p className="flex-1 pl-2">Weights %</p>
    </div>
  );
};

export default FormHeader;
