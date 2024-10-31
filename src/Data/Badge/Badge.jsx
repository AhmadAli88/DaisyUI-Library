const Badge = () => {
  return (
    <div>
      <button className="btn">
        Inbox
        <div className="badge">+99</div>
      </button>
      <button className="btn">
        Inbox
        <div className="badge badge-secondary">+99</div>
      </button>
    </div>
  );
};

export default Badge;
