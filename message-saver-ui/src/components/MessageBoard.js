import React, { useState, useEffect } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MessageList from './MessageList'
import SideBar from './SideBar'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function MessageBoard({chats}) {
    const [activeTab, setActiveTab] = useState('all')
    const [activeChat, setActiveChat] = useState(0)

    const [allMessages, setAllMessages] = useState(['I am just testinga message.', 'there'])
    const [deadlineMessages, setdeadlineMessages] = useState(['dfdf', 'fsdfsdf'])
    const [urlMessages, seturlMessages] = useState(['fsdfsdf', 'dsfsdf'])

    const activate_item = (e, id) => {
        console.log(id)
        setActiveChat(id)
        //Then update, allMessages, deadlineMessages, urlMessages in a useEffect of sorts
    }

    function updateMessageLog (event) {
        this.setAllMessages ({
            allMessages : this.state.allMessages.concat(event.target.value)
        });

        console.log("yo")
    }

    return (
        <div className="center-main-content">
            <Form>
                <Form.Group controlId="nameInput">
                    <Form.Label>Input Name</Form.Label>
                    <Form.Control placeholder="Type Name" />
                </Form.Group>    

                <Form.Group controlId="chatInput">
                    <Form.Label>Input Chat</Form.Label>
                    <Form.Control placeholder="Type Message" />
                </Form.Group>
                
                <Button variant="primary" type="button" onChange={updateMessageLog}>
                    Submit
                </Button>
            </Form>

            <SideBar convos={chats} activeChat={activeChat} activate_item={activate_item}/>
            <div className = "has-33-width">
                <Tabs defaultActiveKey="all messages" id="uncontrolled-tab-example">
                    <Tab eventKey="all messages" title="All Messages">
                        <MessageList messages={allMessages}/>
                    </Tab>
                    <Tab eventKey="deadlines" title="Deadlines">
                        <MessageList messages={deadlineMessages}/>
                    </Tab>
                    <Tab eventKey="urls" title="Urls">
                        <MessageList messages={urlMessages}/>
                    </Tab>
                </Tabs>
            </div>

        </div>
    )
}
