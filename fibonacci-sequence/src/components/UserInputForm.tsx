import { ChangeEvent, FormEvent, useState, Dispatch, SetStateAction } from "react";
import "../index.css";
import { allowOnlyNumeric, formatInputToMaxChars } from "../utils/inputCleaningUtils";

interface UserInputFormProps {
  setUserInput: Dispatch<SetStateAction<number>>;
  inputPrompt: string;
  submitButtonText: string;
  inputNameTag: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
  nextPage: string;
  maxInput: number;
  createPopupNotification: (message: string, isError: boolean) => void;
}

const UserInputForm = ({
  setUserInput,
  inputPrompt,
  submitButtonText,
  inputNameTag,
  setCurrentPage,
  nextPage,
  maxInput,
  createPopupNotification,
}: UserInputFormProps) => {
  const [userInputString, setUserInputString] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const cleanedInput = allowOnlyNumeric(input);
    //Limited to 4 as both have max allowances in thousdands
    const limitedInput = formatInputToMaxChars(cleanedInput, 4)

    setUserInputString(limitedInput);
  };

  const handleFormSubmission = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const userInputNumber = parseInt(userInputString);

    if (userInputNumber >= 0 && userInputNumber <= maxInput) {
      setUserInput(userInputNumber);
      createPopupNotification(
        `Successfully set ${inputNameTag} to ${userInputNumber}`,
        false
      );
      setCurrentPage(nextPage);
    } else {
      createPopupNotification(
        `"${userInputString}" is not a valid input, please enter a number greater than 0 and less than ${maxInput + 1}`,
        true
      );
    }

    setUserInputString("");
  };

  return (
    <div className="centeredContainer">
      <form onSubmit={handleFormSubmission}>
        <fieldset>
          {inputPrompt} :
          <br />
          <input
            value={userInputString}
            onChange={handleInputChange}
            inputMode="numeric"
          />
          <button className="centeredButton" type="submit">
            {submitButtonText}
          </button>
        </fieldset>
      </form>
      <br />
    </div>
  );
};

export default UserInputForm;
