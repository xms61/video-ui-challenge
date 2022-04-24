import React from 'react'
import { useState } from 'react';
import { Container, Form } from 'react-bootstrap'
import { Player } from 'video-react';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Video() {

  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [toggleComments, setToggleComments] = useState(true)

  function addComment(comment){
    setComments([...comments, comment])
    setNewComment('')
  }

  const videos = [
    {
      title: 'first video',
      author: 'max mustermann',
      id: 1,
      path: '../assets/sample.mp4'
    },
    {
      title: 'second video',
      author: 'anna musterfrau',
      id: 2,
      path: '../assets/sample.mp4'
    },
    {
      title: 'third video',
      author: 'john doe',
      id: 3,
      path: '../assets/sample.mp4'
    },
    {
      title: 'third video',
      author: 'john doe',
      id: 4,
      path: '../assets/sample.mp4'
    },
    {
      title: 'third video',
      author: 'john doe',
      id: 5,
      path: '../assets/sample.mp4'
    },
    {
      title: 'third video',
      author: 'john doe',
      id: 6,
      path: '../assets/sample.mp4'
    },
  ]

  const id = window.location.href.split('/')[4]
  let path = ''

  for(let item in videos){
    if(item.id === id){
      console.log(item.id)
      path = item.path
      console.log(path)
    }
  }

  return (
    <Container className='p-3'>
    <Player>
      <source src="http://localhost:3000/videos/sample.mp4" />
    </Player>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        checked={toggleComments}
        onChange={() => setToggleComments(!toggleComments)}
        label="Toggle Comments"
      />
    </Form></div>
    <InputGroup><FormControl value={newComment} className="m-3" as="textarea" aria-label="With textarea" placeholder="Write your comment here!" onChange={(e) => setNewComment(e.target.value)}/></InputGroup>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Button onClick={() => addComment(newComment)}>Add!</Button>
    </div>
    {toggleComments && comments.map(item => (
      <p>{item}</p>
    ))}
    </Container>
  )
}

export default Video