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
    <div className="h-[95vh] bg-main bg-contain bg-bottom bg-no-repeat md:h-[95vh] md:bg-contain">
      <div className="md:mt-18 mx-auto mt-14 max-w-md px-2">
        <div className="max-h-[550px] overflow-y-auto rounded-xl border-2 border-slate-400 bg-white/[0.5] px-8 py-4 backdrop-blur-md">
          {Math.round(calculatedGrade) ? (
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
