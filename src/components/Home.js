import { Link } from 'react-router-dom';
import AnimatedRoutes from "./AnimatedRoutes"

export default function Home() {
  return (
    <AnimatedRoutes>
    <div className="home-container">
      <div className="button-container">
        <Link to="/Song1">
          <button className="custom-button1">Flashing Lights</button>
        </Link>
        <Link to="/Song2">
          <button className="custom-button2">Around The World</button>
        </Link>
      </div>
    </div>
    </AnimatedRoutes>
  );
}
