import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CSS/Button.css"

const Button = ({url,icon}) => {
  return (
      <button>
        <a href={url}>
          {" "}
          <FontAwesomeIcon icon={icon} style={{ fontSize: "32px" }} />
        </a>
      </button>
  );
};

export { Button };
