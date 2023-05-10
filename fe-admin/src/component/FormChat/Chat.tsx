import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const Chat = () => {
	const socket = io('http://localhost:8080', {
		path: 'socket'
	})
	socket.on('connect', () => {
		console.log('Connected to server')
	})

	socket.on('disconnect', () => {
		console.log('Disconnected from server')
	})
	socket.on('message', (message) => {
		console.log('Received message from server:', message)
	})
	// Send a message to the server
	socket.emit('message', 'Hello server!')
	// Xử lý sự kiện khi mở kết nối

	return <div></div>
}

export default Chat
