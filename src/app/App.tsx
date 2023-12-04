import { useState } from "react";
import CalculatedGrade from "./calculatedGrade/CalculatedGrade";
import GradeForm from "./gradeForm/GradeForm";
import SettingsForm from "./settingsForm/SettingsForm";
import { Grades } from "./settingsForm/grades";

function App() {
  const [calculatedGrade, setCalculatedGrade] = useState(0);
  const [numberOfForms, setNumberOfForms] = useState(1);
  const [desiredGrade, setDesiredGrade] = useState<Grades>("70");
  const [triggerRemount, setTriggerRemount] = useState(false);

  function reset() {
    setCalculatedGrade(0);
    setNumberOfForms(1);
    setDesiredGrade("70");
    setTriggerRemount((prev) => !prev);
  }

  return (
    <div className="h-[90dvh] bg-main bg-contain bg-bottom bg-no-repeat md:h-[95dvh] md:bg-contain">
      <div className="md:mt-18 mx-auto mt-2 max-w-md px-2 md:py-12">
        <div className="max-h-[98dvh] overflow-y-auto rounded-xl border-2 border-slate-400 bg-white/[0.5] px-8 py-4 backdrop-blur-md md:max-h-[620px]">
          {Math.round(calculatedGrade) >= 1 ? (
            <CalculatedGrade
              grade={calculatedGrade}
              reset={reset}
              desiredGrade={desiredGrade}
            />
          ) : (
            <>
              <h1 className="mb-4 text-center text-2xl font-semibold">
                AAU Grade calculator
              </h1>

              <SettingsForm
                setNumberOfForms={setNumberOfForms}
                setDesiredGrade={setDesiredGrade}
                setTriggerRemount={setTriggerRemount}
              />

              <GradeForm
                key={triggerRemount ? "A" : "B"}
                numberOfForms={numberOfForms}
                setCalculatedGrade={setCalculatedGrade}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
