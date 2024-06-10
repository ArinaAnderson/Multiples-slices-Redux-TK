import { changeName, changeCost, addCar } from '../store/index.js';
import { useSelector, useDispatch } from 'react-redux';

const CarForm = () => {
  const dispatch = useDispatch();
  const currentName = useSelector((state) => state.form.name);
  const currentCost = useSelector((state) => state.form.cost);

  const inputNamesToActionCreators = {
    name: changeName,
    cost: changeCost,
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    dispatch(inputNamesToActionCreators[name](e.target.value));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name: currentName, cost: currentCost }));
    // resetForm();
  };

  const resetForm = () => {
    dispatch(changeName(''));
    dispatch(changeCost(0));
  };

  return (
    <section className="car-form panel">
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="name-input">Car Name</label>
            <input className="input is-expanded" onChange={handleInputChange} id="name-input" name="name" type="text" value={currentName} />
          </div>
        </div>
        
        <div>
          <label htmlFor="cost-input">Car Cost</label>
          <input onChange={handleInputChange} id="cost-input" name="cost" type="text" value={currentCost} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>);
}

export default CarForm;
