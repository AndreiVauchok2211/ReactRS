import './Form.css';

function Form() {
  return (
    <div className="form__container">
      <form className="form">
        <input className="input" type="text" placeholder="Enter cocktail" />
        <button className="button button__form-submit" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;
