import "./KnownIssueCard.css";

function KnownIssueCard() {
  return (
    <div className="card-container">
      <div className="figure">
        <img
          src="https://source.unsplash.com/random/200x200/?wallpaper,landscape"
          alt=""
        />
      </div>
      <div>
        <h1>Card Title</h1>
      </div>
      <div>Description</div>
    </div>
  );
}

export default KnownIssueCard;
