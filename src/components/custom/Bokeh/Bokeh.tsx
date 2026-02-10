import "./Bokeh.scss";

function Bokeh() {
  const numCircles = 4;
  const items = [];
  for (let i = 0; i < numCircles; i++) items.push(<span key={i} />);

  return <div className="background">{items}</div>;
}

export default Bokeh;
