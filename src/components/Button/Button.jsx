const Button = () => {
  return (
    <>
      <div className="flex gap-3 justify-center">
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
      <div className="flex gap-3 justify-center mt-3">
        <button className="btn btn-outline">Default</button>
        <button className="btn btn-outline btn-primary">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-accent">Accent</button>
      </div>
      <div className="flex gap-3 justify-center mt-3">
        <button className="btn btn-lg">Large</button>
        <button className="btn">Normal</button>
        <button className="btn btn-sm">Small</button>
        <button className="btn btn-xs">Tiny</button>
      </div>
      <div className="flex gap-3 justify-center mt-3">
        <button className="btn btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-3 justify-center mt-3">
        <button className="btn btn-square">
          <span className="loading loading-spinner"></span>
        </button>
      </div>
    </>
  );
};

export default Button;
