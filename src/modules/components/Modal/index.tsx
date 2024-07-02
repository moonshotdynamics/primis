import React, { FC, useState } from 'react';
 


interface Props {
  title?: string;
  leftButtonText?: string;
  rightButtonText?: string;
  onClick: (val:boolean) => {};
}

export const Modal: FC<Props> = ({ title = 'Your Question', leftButtonText = 'Ask', rightButtonText = ' Cancel', onClick }) => {
    const [val, setVal] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setVal(e.target?.value);
    };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (val.length < 1){

      alert('Please enter your question');
    }
  };
  


  return (
    <div className="flex border-b-2 p-8 flex-col border-solid border-2 border-gray-500 rounded-md">
      <div className="flex flex-col justify-between">{title}</div>
      <form onSubmit={handleSubmit} className='gap-4 flex flex-col'>
        <input
          type="textfield"
          value={val}
          onChange={handleInputChange}
          className="text-gray-700 p-2 rounded-md border-solid border-2 border-gray-500"
        />
        <div className="flex justify-between">
          <div>
            <button
              className="border-solid border-2 border-gray-500 p-2 rounded-md"
              type="submit"
            >
              {leftButtonText}
            </button>
          </div>
          <div>
            {' '}
            <button
              className="border-solid border-2 border-gray-500 p-2 rounded-md"
              onClick={() => onClick(false)}
            >
              {rightButtonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Modal;
