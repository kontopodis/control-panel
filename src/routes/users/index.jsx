import { Link } from "react-router-dom";
import UserCard from "../../components/userCard";
import dumbData from "../../lib/dumb/users"
console.log(dumbData)
export default function Users() {
  return (
    <>
<UserCard user={dumbData[0]}/>
<UserCard user={dumbData[1]}/>
<UserCard user={dumbData[2]}/>
<UserCard user={dumbData[3]}/>
    </>
  );
}
