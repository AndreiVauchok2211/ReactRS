import { ChangeEventHandler, SetStateAction, useState } from 'react';

export function ControledForm() {
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };
  const handleChange1 = (e: { target: { value: SetStateAction<string> } }) => {
    setInputValue1(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Controled Form</h2>
      <Input
        inputValue={inputValue}
        type="email"
        placeholder="email"
        onSetInput={handleChange}
      />
      <Input
        inputValue={inputValue1}
        type="password"
        placeholder="password"
        onSetInput={handleChange1}
      />
    </div>
  );
}

function Input({
  inputValue,
  type,
  onSetInput,
  placeholder,
}: {
  inputValue: string;
  type: string;
  onSetInput: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}) {
  return (
    <form>
      <input
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={onSetInput}
      />
      <p>Input Value: {inputValue}</p>
    </form>
  );
}
