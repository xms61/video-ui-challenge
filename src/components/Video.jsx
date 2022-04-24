import React from 'react'
import { Container } from 'react-bootstrap'
import { Player } from 'video-react';

function Video() {

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
    </Container>
  )
}

export default Video