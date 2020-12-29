import React from 'react';

const Labelinput = ({
  type = 'text',
  placeholder = '',
  onChange = null,
}: {
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <>
    <div className="label-float">
      <input
        id="input"
        type={type}
        placeholder=" "
        className="w-full"
        onChange={onChange}
      />
      <label htmlFor="input">{placeholder}</label>
    </div>
    <style jsx>
      {`
        .label-float {
          position: relative;
          padding-top: 13px;
        }

        .label-float input {
          border: 0;
          border-bottom: 1px solid lightgrey;
          outline: none;
          font-size: 16px;
          transition: all 0.3s ease-out;
          -webkit-transition: all 0.3s ease-out;
          -moz-transition: all 0.3s ease-out;
          -webkit-appearance: none;
          border-radius: 0;
        }

        .label-float input:focus {
          border-bottom: 1px solid #3951b5;
        }

        .label-float input::placeholder {
          color: transparent;
        }

        .label-float label {
          color: grey;
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          margin-top: 13px;
          transition: all 0.3s ease-out;
          -webkit-transition: all 0.3s ease-out;
          -moz-transition: all 0.3s ease-out;
        }

        .label-float input:required:invalid + label {
          color: red;
        }
        .label-float input:focus:required:invalid {
          border-bottom: 1px solid red;
        }
        .label-float input:required:invalid + label:before {
          content: '*';
        }
        .label-float input:focus + label,
        .label-float input:not(:placeholder-shown) + label {
          font-size: 11px;
          margin-top: 0;
          color: #3951b5;
        }
      `}
    </style>
  </>
);

export default Labelinput;
