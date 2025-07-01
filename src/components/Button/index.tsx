import type { PropsWithChildren } from "react";
import './index.css'
import classNames from "classnames";

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'link';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}

const Button = ({
    variant = 'primary',
    size = 'md',
    disabled,
    children
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
        >
            {children}
        </button>
    )
}

export default Button