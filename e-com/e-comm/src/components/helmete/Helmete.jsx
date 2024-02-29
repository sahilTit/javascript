function Helmete(props) {
  document.title = "TechSofa-" + props.title;
  return <div >{props.children}</div>;
}

export default Helmete;
