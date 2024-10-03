import "./style.css";

export default function MovieStudio() {
  return (
    <div className="studio-container">
        <div className="studio-bg">
          <p className="film"> FILM STUDIOS </p>
        </div>
        <div className="limited-container">
          <ul className="studio-items">
            <div className="first-batch">
              <li className="studio"> Warner Bros.</li>
              <li className="studio"> Paramount Pictures </li>
              <li className="studio"> Universal Pictures </li>
            </div>
            <div className="remaining">
              <li className="studio"> Walt Disney Pictures </li>
              <li className="studio"> Sony Pictures </li>
              <li className="studio"> 20th Century Studios </li>
            </div>
          </ul>
        </div>
    </div>
  );
}
