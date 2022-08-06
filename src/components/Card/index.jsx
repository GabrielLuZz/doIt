import { FiCalendar, FiClipboard } from "react-icons/fi";
import Button from "../Button";
import { Container } from "./styles";

function Card({ title, date, onClick }) {
  return (
    <Container>
      <span>
        <FiClipboard /> {title}
      </span>
      <hr />
      <time>
        <FiCalendar /> {date}
      </time>

      <Button onClick={onClick}>Concluir</Button>
    </Container>
  );
}

export default Card;
