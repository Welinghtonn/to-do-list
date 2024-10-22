import "../style/checked.css"

const Checked = ({checked, handleOnChange}) => {

    return (
        <label className="labelCheckbox" for="checkbox" style={{ backgroundColor: `${checked ? "#32de84" : "inherit"}` }} htmlFor="">
            <input id='checkbox'  onChange={handleOnChange} checked={checked} type="checkbox" />
        </label>
    );
}

export default Checked;
