import Link from "next/link";
import Drone from "./[...not_found]/_Drone/Drone";

export default function NotFound() {
  return (
    <div>
      <Drone />
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
