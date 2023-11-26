# FTR Platform Developer Coding Test

## Aleksei Miros Submission : https://fibonacci-sequence.fly.dev/

## To run locally:
- Assumes Node is installed.
- From root of project, cd to fibonacci-sequence.
- run : npm install.
- run: npm run dev.
- App should be running on : http://localhost:5173/

## To run unit tests:
- From root of project, cd to fibonacci-sequence.
- run : npm test.

## Project Usage

### Input Feedback

Feedback appears in the top center of the page.

### Fibonacci Sequence Length

Enter the number of elements for the Fibonacci sequence:

- Defaults to a length of 1000 if setting is skipped via the navigation bar.
- Must be a non-negative integer.
- Maximum sequence length of 1000.
- Length 0 assumes no sequence.
- Does not accept empty input.

### Set Delay

Enter how often the frequency count updates in seconds:

- Defaults to 0 if setting is skipped via the navigation bar.
- Must be a non-negative integer.
- Maximum number of seconds is 1000.
- Frequency of 0 updates the count instantly.
- Frequencies are permanently displayed, but are updated at the given interval.
- Does not accept empty input.

### Changing variables

You can change the Fibonacci sequence length and timer delay after they have been set:

- Changing these variables does not reset the frequency count.
- Numbers marked as in the Fibonacci sequence retain their mark with resepect to the sequence at time of entering.

### Timer

The timer starts automatically when loading onto the main 'page'.

**Controls:**

- Press "Halt" to pause the timer.
- Press "Resume" to continue the timer.

### Number Input

Enter numbers to see their frequency and check if they are in the Fibonacci sequence.

- Must be an integer (including negatives).
- Numbers greater than 10 digits are formatted to scientific notation.
- Max input of 1.00000000e+308 characters, as numbers larger than this get converted to "infinity" on conversion to scientific notation.

### Quit

Press "Quit" under the frequency table to exit.
