import { useState } from "react";
import CalculatedGrade from "./calculatedGrade/CalculatedGrade";
import GradeForm from "./gradeForm/GradeForm";
import NumberForm from "./numberForm/NumberForm";

function App() {
  const [calculatedGrade, setCalculatedGrade] = useState(0);
  const [numberOfForms, setNumberOfForms] = useState(0);
  const [desiredGrade, setDesiredGrade] = useState("");
  const [triggerRemount, setTriggerRemount] = useState(false);

  function reset() {
    setCalculatedGrade(0);
    setNumberOfForms(0);
    setTriggerRemount((prev) => !prev);
  }

  return (
    <div className="absolute inset-0 -z-20 mx-auto h-[95vh] w-[100vw] overflow-y-hidden bg-main bg-contain bg-bottom bg-no-repeat md:h-[100vh] md:bg-contain">
      <div className="mx-auto mt-14 max-w-md px-2 md:mt-32">
        <div className="max-h-[550px] overflow-y-auto rounded-xl border-2 border-slate-400 bg-white/[0.5] px-8 py-4 backdrop-blur-md">
          {calculatedGrade ? (
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

              <NumberForm
                setNumberOfForms={setNumberOfForms}
                setDesiredGrade={setDesiredGrade}
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
    </div>
  );
}

export default App;
