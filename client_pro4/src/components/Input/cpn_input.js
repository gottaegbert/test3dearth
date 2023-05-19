import "./cpn_input.css";
function Input(props) {
  const nameInput = props.name;
  const idInput = props.idInput || "";
  const classInput = props.classInput;
  const placeholder = props.placeholder;
  return (
    <div className="wrap-input">
      <input
        required="required"
        name={nameInput}
        type="text"
        className={`${classInput ? classInput : ""}form-control`}
        id={idInput}
        onChange={props.onChange ? props.onChange : null}
      />
      <span>{placeholder}</span>
    </div>
  );
}
export const Textarea = (props) => {
  const nameArea = props.name;
  const idArea = props.idArea || "";
  const classArea = props.classArea;
  const placeholder = props.placeholder;
  const row = props.row || "";
  const cols = props.cols || "";
  return (
    <div className="wrap-input">
      <textarea
        name={nameArea}
        id={idArea}
        className={`${classArea ? classArea : ""} form-control`}
        cols={cols}
        rows={row}
        type="text"
        autocomplete="on"
        onChange={props.onChange ? props.onChange : null}
        required="required"
      ></textarea>
      <span>{placeholder}</span>
    </div>
  );
};
export default Input;
