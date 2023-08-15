import classes from './MealItemForm.module.css';

const MealItemForm = (props) =>{
    return <form className={classes.form}>
        <div>
        <h3>Amount</h3>
        <input/>
        </div>

        <button>+ADD</button>
    </form>
};

export default MealItemForm;