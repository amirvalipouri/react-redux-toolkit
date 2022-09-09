import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row , Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addPosts } from '../../redux/reducer/Posts/posts';
import { allUser } from '../../redux/reducer/Users/users';

const AddPosts = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [user, setUser] = useState(null)

    const dispatch = useDispatch()
    const users = useSelector(allUser)

    const addHandler = () => {
        if (title && content) {
            dispatch(addPosts(title, content, user))
            console.log("heree")
            setTitle("")
            setContent("")
            setUser(null)
        }
    }
    return (
        <Row className="d-flex justify-content-center align-items-center py-4">
            <Col xs={10} sm={10} md={10} lg={5} xl={5} >
                <Form className='px-2 py-4 rounded shadow bg-white'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title : </Form.Label>
                        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter a title ... " />

                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author :</Form.Label>
                        <Form.Select onChange={(e) => { setUser(e.target.value) }} aria-label="Default select example">
                            <option>Open this select menu</option>
                            {
                                users.map(i =>
                                    <option value={i.id} key={i.id}>{i.name}</option>
                                )
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>content : </Form.Label>
                        <Form.Control value={content} onChange={(e) => setContent(e.target.value)} as="textarea" rows={3} />
                    </Form.Group>

                    <Button onClick={addHandler} variant="primary" type="button">
                        Add Posts
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}

export default AddPosts;