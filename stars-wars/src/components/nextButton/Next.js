import "./next.css";

export default function Next(props) {
  return (
    <button onClick={props.next} className="btn">
      Next
    </button>
  );
}
