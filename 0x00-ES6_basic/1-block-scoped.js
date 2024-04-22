// Making task and task2 block-scoped.
// Changes will be reflected in the function’s output.

export default function taskBlock (trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
