import type { InputHTMLAttributes } from 'react';
import './index.css'

type InputProps = {
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (value: string) => void;
    value?: string;
    label?: string;
} &InputHTMLAttributes<HTMLInputElement>

const Input = ({
    placeholder,
    disabled,
    readOnly,
    onChange,
    value,
    label,
    ... props
}: InputProps) => {
  return (
    <label className='yf-input'>
        <span>{label}</span>
        <input
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onChange={(event) => onChange?.(event.target.value)}
            value={value}
            {... props}
        />
    </label>
  )
}

export default Input