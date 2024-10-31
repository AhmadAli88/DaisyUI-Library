const Avatar = () => {
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-24 rounded-xl">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content w-24 rounded-full">
          <span className="text-3xl">D</span>
        </div>
      </div>
      <div className="avatar online placeholder">
        <div className="bg-neutral text-neutral-content w-16 rounded-full">
          <span className="text-xl">AI</span>
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content w-12 rounded-full">
          <span>SY</span>
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content w-8 rounded-full">
          <span className="text-xs">UI</span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
