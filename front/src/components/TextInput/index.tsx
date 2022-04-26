import React from 'react'

interface TextInputProps {
  title?: string,
  type: "text" | "email" | "password",
  placeholder?: string,
  value: string,
  onChange: (value : string) => void
}

const TextInput:React.FC<TextInputProps> = (props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value)
  }

  return (
    <input
      title={props.title}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => onChange(event)}
    />
  )
}

export default TextInput;
