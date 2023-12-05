import { cn } from "@/common/lib/utils";
import CalculatedGrade from "./calculatedGrade/CalculatedGrade";
import GradeForm from "./gradeForm/GradeForm";
import SettingsForm from "./settingsForm/SettingsForm";
import { useGradeContext } from "./context/useGradeContext";

function App() {
  const { isGradeShown, triggerRemount } = useGradeContext();

  return (
    <div className="h-[100dvh] bg-main bg-contain bg-bottom bg-no-repeat md:bg-60%">
      <div className="md:mt-18 mx-auto mt-2 max-w-md px-2 md:py-12">
        <div className="max-h-[98dvh] overflow-y-auto rounded-xl border-2 border-slate-400 bg-white/[0.5] px-8 py-4 backdrop-blur-md md:max-h-[620px]">
          <h1 className="mb-4 text-center text-2xl font-semibold">
            AAU Grade calculator
          </h1>

          <div className={cn(isGradeShown && "hidden")}>
            <SettingsForm />

            <GradeForm key={triggerRemount ? "A" : "B"} />
          </div>

          {isGradeShown && <CalculatedGrade />}
        </div>
      </div>
    </div>
  );
}

export default App;
