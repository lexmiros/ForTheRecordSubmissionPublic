import { Dispatch, SetStateAction } from "react";

interface WelcomeProps {
  setCurrentPage: Dispatch<SetStateAction<string>>;
}

const Welcome = ({ setCurrentPage }: WelcomeProps) => {
  const continueToNextPage = () => {
    setCurrentPage("GetFibbonaciLength");
  };

  return (
    <div className="centeredContainer">

      <button className="centeredButton" onClick={continueToNextPage}>Continue</button>

      <div style={{ marginTop: "20px" }}>
        <h3>Input Feedback</h3>
        <p>Feedback appears in the top center of the page.</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Fibonacci Sequence Length</h3>
        <p>Enter the number of elements for the Fibonacci sequence:</p>
        <ul>
          <li>Defaults to a length of 1000 if setting is skipped via navigation bar.</li>
          <li>Must be a non-negative integer.</li>
          <li>Maximum sequence length of 1000.</li>
          <li>Length 0 assumes no sequence.</li>
          <li>Does not accept empty input.</li>
        </ul>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Set Delay</h3>
        <p>Enter how often the frequency count updates in seconds:</p>
        <ul>
          <li>Defaults to 0 if setting is skipped via navigation bar.</li>
          <li>Must be a non-negative integer.</li>
          <li>Maximum number of seconds is 1000.</li>
          <li>Frequency of 0 updates count instantly.</li>
          <li>Frequencies are permanently displayed, but are updated at the given interval.</li>
          <li>Does not accept empty input.</li>
        </ul>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Timer</h3>
        <p>The timer starts automatically when loading onto the main 'page'.</p>
        <p>
          <strong>Controls:</strong>
          <br />
          Press "Halt" to pause the timer.
          <br />
          Press "Resume" to continue the timer.
        </p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Number Input</h3>
        <p>
          Enter numbers to see their frequency and check if they are in the
          Fibonacci sequence.
        </p>
        <ul>
          <li>Must be an integer (including negatives)</li>
          <li>Numbers greater than 10 digits are formatted to scientific notation</li>
          <li>Max input of 1.00000000e+308 characters as numbers larger than this get converted to "infinity" on conversion to sceintific notation</li>
        </ul>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Quit</h3>
        <p>Press "Quit" under the frequency table to exit.</p>
      </div>
    </div>
  );
};

export default Welcome;
