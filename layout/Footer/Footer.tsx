import {FooterProps} from "./Footer.props";
import styles from './Footer.module.css';
import cn from "classnames";
import {format} from 'date-fns'


export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                Owltop © 2020 - {format(new Date(), 'yyyy')} All rights reserved.
            </div>
            <a href="#">Disclaimer</a>
            <a href="#">Terms & Conditions</a>
        </footer>
    )
}