import { useState } from "react";
import CalculatedGrade from "./calculatedGrade/CalculatedGrade";
import GradeForm from "./gradeForm/GradeForm";
import NumberForm from "./numberForm/NumberForm";

function App() {
  const [calculatedGrade, setCalculatedGrade] = useState(0);
  const [numberOfForms, setNumberOfForms] = useState(0);
  const [triggerRemount, setTriggerRemount] = useState(false);

  function reset() {
    setCalculatedGrade(0);
    setNumberOfForms(0);
    setTriggerRemount((prev) => !prev);
  }

  return (
    <>
      <div className="mx-auto mt-14 md:mt-32 max-w-md px-4">
        <div className="max-h-[500px] overflow-y-auto rounded-xl border-2 border-slate-400 bg-white/[0.5] px-8 py-4 backdrop-blur-md">
          {calculatedGrade ? (
            <CalculatedGrade grade={calculatedGrade} reset={reset} />
          ) : (
            <>
              <h1 className="mb-4 text-center text-2xl font-semibold">
                Grade calculator
              </h1>

              <NumberForm
                setNumberOfForms={setNumberOfForms}
                setTriggerRemount={setTriggerRemount}
              />

              {numberOfForms > 0 && numberOfForms <= 10 && (
                <GradeForm
                  key={triggerRemount ? "A" : "B"}
                  numberOfForms={numberOfForms}
                  setCalculatedGrade={setCalculatedGrade}
                />
              )}
            </>
          )}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 mx-auto w-[100%] bg-main bg-contain bg-center bg-no-repeat"></div>
    </>
  );
}

export default App;
