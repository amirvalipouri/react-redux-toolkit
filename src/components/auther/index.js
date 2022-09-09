import { useSelector } from "react-redux";
import { allUser } from "../../redux/reducer/Users/users";

const Author = ({userId = null}) => {
    console.log("userId in author" , userId)
    const users = useSelector(allUser)

    const found = users.find(i => i.id == userId)
    console.log(found)

    return <p style={{fontStyle:"italic"}} className="mx-2">By {found ? found.name : "unknown author"}</p>
}

export default Author