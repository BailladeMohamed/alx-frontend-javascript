// guardrail will accept 1 argument
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
  } catch (error) {
    queue.push(error.toString());
  }
  queue.push('Guardrail was processed');
  return queue;
}
