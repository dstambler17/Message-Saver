import React, { useState, useEffect } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MessageList from './MessageList'
import SideBar from './SideBar'

export default function MessageBoard({chats}) {
    const [activeTab, setActiveTab] = useState('all')
    const [activeChat, setActiveChat] = useState(0)

    const [allMessages, setAllMessages] = useState(['hey', 'there'])
    const [deadlineMessages, setdeadlineMessages] = useState(['dfdf', 'fsdfsdf'])
    const [urlMessages, seturlMessages] = useState(['fsdfsdf', 'dsfsdf'])

    const activate_item = (e, id) => {
        console.log(id)
        setActiveChat(id)
        //Then update, allMessages, deadlineMessages, urlMessages in a useEffect of sorts
    }

    return (
        <div className="center-main-content is-column-direction">
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
