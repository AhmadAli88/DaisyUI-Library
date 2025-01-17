const Collapse = () => {
  return (
    <div>
      <div tabIndex={0} className="collapse bg-base-200">
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabindex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
