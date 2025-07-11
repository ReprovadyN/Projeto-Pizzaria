import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import './index.css'
import classNames from "classnames";

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'link';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
} &ButtonHTMLAttributes <HTMLButtonElement>

const Button = ({
    variant = 'primary',
    size = 'md',
    disabled,
    children,
    ... props
}: PropsWithChildren<ButtonProps>) => {
    const classes = classNames(
        'btn',
        size,
        variant,
        {
            disabled
        }
    )

    

    return (
        <button
            className={classes}
            disabled={disabled}
            {... props}
        >
            {children}
        </button>
    )
}

export default Button