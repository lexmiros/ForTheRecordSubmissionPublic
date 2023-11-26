import React, { ChangeEvent, FormEvent, useState } from "react";
import "../index.css";
import { isInFibonacciSequence } from "../utils/fibonacciSequenceUitls";
import { updateUserFrequencies } from "../utils/userFrequenciesUtils";
import { allowNumericAndHyphen, formatNumberToScientificNotation, formatInputToMaxChars } from "../utils/inputCleaningUtils";

interface MainUserInputFormProps {
  userInputFrequencies: Map<bigint, number>;
  fibonacciSequence: Array<bigint>;
  setUserInputFrequencies: React.Dispatch<
    React.SetStateAction<Map<bigint, number>>
  >;
  createPopupNotification: (message: string, isError: boolean) => void;
}

const MainUserInputForm = ({
  userInputFrequencies,
  fibonacciSequence,
  setUserInputFrequencies,
  createPopupNotification,
}: MainUserInputFormProps) => {
  const [userInputString, setUserInputString] = useState<string>("");

  //Create new HashMap of frequencies and save to state
  const updateFrequencies = (userInputNumber: bigint): void => {
    const updatedUserFrequencies = updateUserFrequencies(
      userInputFrequencies,
      userInputNumber
    );
    setUserInputFrequencies(updatedUserFrequencies);
  };

  const handleFormSubmission = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    //BigInt returns empty string as zero, checking for empty string before converting
    if (!isNaN(parseInt(userInputString))) {
      const userInputNumber = BigInt(userInputString);

      //Update HashMap
      updateFrequencies(userInputNumber);

      const isInputInFibonacciSequence = isInFibonacciSequence(
        fibonacciSequence,
        userInputNumber
      );

      const successMessage = isInputInFibonacciSequence
        ? `Successfully added ${formatNumberToScientificNotation(
          userInputNumber
        )} to the frequencies map. ${formatNumberToScientificNotation(
          userInputNumber
        )} is in the Fibonacci Sequence.`
        : `Successfully added ${formatNumberToScientificNotation(
          userInputNumber
        )} to the frequencies map.`;

      createPopupNotification(successMessage, false);
    } else {
      createPopupNotification(
        `"${userInputString}" is not a valid input. Please enter a number.`,
        true
      );
    }

    setUserInputString("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    const numericInput = allowNumericAndHyphen(input);
    const limitedInput = formatInputToMaxChars(numericInput, 308);

    setUserInputString(limitedInput);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <fieldset>
          <label htmlFor="userInput">Please enter a number:</label>
          <input
            type="text"
            id="userInput"
            value={userInputString}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <button className="centeredButton" type="submit">
            Submit number
          </button>
        </fieldset>
      </form>
      <br />
    </div>
  );
};

export default MainUserInputForm;
