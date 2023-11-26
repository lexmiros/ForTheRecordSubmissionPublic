import "./index.css";

import { useState, useEffect } from "react";
import { calculateFibonacciSequence } from "./utils/fibonacciSequenceUitls";
import Notification from "./components/Notification";
import GetMainUserInputForm from "./components/MainUserInputForm";
import UserFrequencies from "./components/UserFrequencies";
import UserInputForm from "./components/UserInputForm";
import Timer from "./components/Timer";
import Welcome from "./components/Welcome";
import GoodbyeMessage from "./components/GoodbyeMessage";
import Navbar from "./components/Navbar";

function App() {
  const [delayNumberInSeconds, setDelayNumberInSeconds] = useState<number>(0);
  const [userInputFrequencies, setUserInputFrequencies] = useState<
    Map<bigint, number>
  >(new Map<bigint, number>());
  //A copy of userInputFrequencies, updated every X seconds to deal with the update requirement
  const [userInputFrequenciesOutput, setUserInputFrequenciesOutput] = useState<
    Map<bigint, number>
  >(new Map<bigint, number>());
  const [notification, setNotification] = useState({
    message: "",
    isError: false,
  });
  const [fibonacciLength, setFibonacciLength] = useState<number>(1000);
  const [fibonacciSequence, setFibonacciSequence] = useState<Array<bigint>>([]);
  //State used to decide which components to display
  const [currentPage, setCurrentPage] = useState("Welcome");

  const updateOutputFrequencies = (): void => {
    setUserInputFrequenciesOutput(new Map(userInputFrequencies));
  };

  const createPopupNotification = (message: string, isError: boolean): void => {
    setNotification({ message, isError });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotification({ message: "", isError: false });
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [notification]);

  useEffect(() => {
    const fibonacciSeq = calculateFibonacciSequence(fibonacciLength);
    setFibonacciSequence(fibonacciSeq);
  }, [fibonacciLength]);

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />

      {currentPage === "Welcome" && <Welcome setCurrentPage={setCurrentPage} />}
      <Notification notification={notification} />
      {currentPage === "GetFibbonaciLength" && (
        <UserInputForm
          setUserInput={setFibonacciLength}
          inputPrompt="Please enter the length of the Fibonacci sequence to check against (Integer between 0 - 1000 inclusive)"
          submitButtonText="Set Fibonacci sequence length"
          inputNameTag="Fibonacci sequence"
          setCurrentPage={setCurrentPage}
          nextPage="GetDelay"
          maxInput={1000}
          createPopupNotification={createPopupNotification}
        />
      )}

      {currentPage === "GetDelay" && (
        <UserInputForm
          setUserInput={setDelayNumberInSeconds}
          inputPrompt="Please input the amount of time in seconds between updating numbers and their frequency (Integer between 0 - 1000 inclusive)"
          submitButtonText="Set update frequency"
          inputNameTag="update frequency"
          setCurrentPage={setCurrentPage}
          nextPage="MainPage"
          maxInput={1000}
          createPopupNotification={createPopupNotification}
        />
      )}
      {currentPage === "MainPage" && (
        <>
          <Timer
            delayInSeconds={delayNumberInSeconds}
            updateOutputFrequencies={updateOutputFrequencies}
          />
          <GetMainUserInputForm
            userInputFrequencies={userInputFrequencies}
            fibonacciSequence={fibonacciSequence}
            setUserInputFrequencies={setUserInputFrequencies}
            createPopupNotification={createPopupNotification}
          />
          {delayNumberInSeconds !== 0 && (
            <UserFrequencies
              userInputFrequencies={userInputFrequenciesOutput}
              fibonacciSequence={fibonacciSequence}
            />
          )}
          {delayNumberInSeconds === 0 && (
            <UserFrequencies
              userInputFrequencies={userInputFrequencies}
              fibonacciSequence={fibonacciSequence}
            />
          )}
          <button
            className="centeredButton"
            onClick={() => setCurrentPage("Goodbye")}
          >
            Quit
          </button>
        </>
      )}

      {currentPage === "Goodbye" && (
        <>
          <GoodbyeMessage />
          <UserFrequencies
            userInputFrequencies={userInputFrequencies}
            fibonacciSequence={fibonacciSequence}
          />
        </>
      )}
       <div className="footer">
          
          </div>
    </div>
  );
}

export default App;
