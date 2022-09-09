import { useSelector } from "react-redux"

import { allPosts } from "../../redux/reducer/Posts/posts"
import { allUser } from "../../redux/reducer/Users/users"
import { Col , Row } from 'react-bootstrap'
import Author from "../auther"
import TimeAgo from "../TimeAgo"
import ReactionButtons from "../ReactionBtn"


const Posts = () => {
    const posts = useSelector(allPosts)
    const users = useSelector(allUser)
    const orderPosts=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    const renderPosts = orderPosts.map((item) =>
        <Col xs={10} sm={10} md={8} lg={4} xl={4}  className="my-2 mx-2 py-4 px-2 bg-dark text-white shadow rounded" key={item.id}>
            <h3 className="mx-2">{item.title}</h3>
            <p className="mx-2">{item.content}</p>
            <Author userId={item.userId} />
            <ReactionButtons post={item}/>
            <TimeAgo time={item.date} />
        </Col>
    )
    return (
        <div className="w-100" style={{overflowX : "hidden"}}>
            <h1 className="text-center m-2">Here is all posts.</h1>
            <Row className=" d-flex justify-content-center align-items-center">
                {renderPosts}
            </Row>
        </div>
    )
}

export default Posts;