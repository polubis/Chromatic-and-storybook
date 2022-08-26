import React from "react";

import { FieldBase } from "../field-base";

export interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}

export const InputField = ({
  label,
  error,
  className,
  ...inputProps
}: InputFieldProps) => {
  return (
    <FieldBase label={label} error={error} className={className}>
      <input {...inputProps} style={{ background: "red" }} />
    </FieldBase>
  );
};
