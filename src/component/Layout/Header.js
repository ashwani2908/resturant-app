import { Fragment } from "react";
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div>ReactMeals</div>
                <div>
                    <button className={classes.header}>
                        <span>Your Cart</span>
                        <span>0</span>
                    </button>
                </div>
                </header>
            
        </Fragment>
    );
}

export default Header;