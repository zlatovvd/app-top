import { useEffect, useState } from 'react';
import styles from './Raiting.module.css';
import { RaitingProps } from "./Raiting.props";
import StarIcon from './star.svg';
import cn from 'classnames';

export const Raiting = ({isEditable=false, raiting, setRaiting, ...props}:RaitingProps):JSX.Element => {

    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRaiting(raiting)
    }, [raiting])

    const constructRaiting = (currentRaiting:number) => {
        const updateArray = raitingArray.map((r:JSX.Element, i: number) => {
            return (
                <StarIcon className = {cn(styles.star, {
                    [styles.filled]: i < currentRaiting
                })}  />
            )
        });
        setRaitingArray(updateArray);
    }

    return (
        <div {...props}>
            {raitingArray.map((r ,i) => (<span key={i}>{r}</span>))}
        </div>
    )
}