import styles from './form.module.css';

const Filter = ({onChangeInput}) => {
    return (
        <div className="filter">
            <p>Find contacts by name</p>
            <input onChange={onChangeInput} className={styles.input} name="filter" type="text"></input>
        </div>
    )
}

export default Filter;