import { MdEdit } from "react-icons/md";
export default function userCard({ user }) {
  return (
    <>
      <div className="userCard">
        <div className="userImg">{user.imgUrl}</div>

        <div className="details">
        <div className="userButtons">
            <MdEdit />
          </div>
          <div className="userName">{user.username}</div>
          <div className="userEmail">{user.email}</div>
          <div className="userRole">{user.role}</div>

        </div>
      </div>
    </>
  );
}
