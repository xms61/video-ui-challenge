import React from 'react'
import { useState, useEffect } from 'react';
import { Offcanvas, Container, Form } from 'react-bootstrap'
import { Player } from 'video-react';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button, Card, CardGroup } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import { run as runHolder } from 'holderjs/holder';

function Video() {

  useEffect(() => {        
    runHolder('image-class-name');
  });

  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [toggleComments, setToggleComments] = useState(true)
  const [canvas, setCanvas] = useState(false)

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
      title: 'fourth video',
      author: 'john doe',
      id: 4,
      path: '../assets/sample.mp4'
    },
    {
      title: 'fifth video',
      author: 'john doe',
      id: 5,
      path: '../assets/sample.mp4'
    },
    {
      title: 'sixth video',
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
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
      <Form className='me-2'>
        <Form.Check 
          type="switch"
          id="custom-switch"
          checked={toggleComments}
          onChange={() => setToggleComments(!toggleComments)}
          label="Toggle Comments"
        />
      </Form>
      <Button variant="primary" onClick={() => setCanvas(!canvas)} className="me-2">
        Related Videos
      </Button>
      <Offcanvas style={{ height: '45%' }} placement='bottom' show={canvas} onHide={() => setCanvas(!canvas)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Related Videos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <CardGroup>
          {videos.map(item => (
            <LinkContainer to={`/video/${item.id}`} key={'LinkKey' + item.id}>
            <Card style={{ width: '18rem' }} className="p-2 m-3" key={'CardKey' + item.id}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.author}
                </Card.Text>
              </Card.Body>
            </Card>
            </LinkContainer>
          ))}
          </CardGroup>
        </Offcanvas.Body>
      </Offcanvas></div>
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