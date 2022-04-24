import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import { run as runHolder } from 'holderjs/holder';
import { useEffect } from 'react';

function Overview() {

  useEffect(() => {        
    runHolder('image-class-name');
  });

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

  return (
    <Container fluid>
      <Row xs={1} md={3} className="p-3">
      {videos.map(item => (
        <LinkContainer to={`/video/${item.id}`} key={'LinkKey' + item.id}>
        <Card style={{ width: '18rem' }} className="p-5" key={'CardKey' + item.id}>
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
      </Row>
    </Container>
  )
}

export default Overview