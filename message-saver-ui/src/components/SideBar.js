import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function SideBar({convos, activeChat, activate_item}) {
    const chatDisplay = convos.map(item => {
        const is_active = (item.id == activeChat) ? true : false;
        return (
            <ListGroup.Item active={is_active} id={item.id} key={item.id} onClick={((e) => activate_item(e, item.id))}>{item.title}</ListGroup.Item>
        )
       
      }
    )
    return (
        <div className="has-left-margin">
            <ListGroup>
                {chatDisplay}
            </ListGroup>
        </div>
    )
}
