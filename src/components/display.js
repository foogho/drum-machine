export default function Display(props) {
  return (
    <p id="display" className="shadow-sm p-4 rounded text-bg-light lead">
      {props.text}
    </p>
  );
}
