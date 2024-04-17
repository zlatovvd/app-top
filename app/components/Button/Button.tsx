import style from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({children, appearance}:ButtonProps): JSX.Element => {
    return (
        <button className={cn(style.button, {
            [style.primary]: appearance === 'primary',
            [style.ghost]: appearance === 'ghost',
        })}>
            {children}
        </button>
    )
}