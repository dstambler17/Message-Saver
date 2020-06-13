import React from 'react'
import Message from './Message'

export default function MessageList({messages}) {
    const listDisplay = messages.map(key =>
        <Message body={key} />
    )
    return (
        <div>
            {listDisplay}
        </div>
    )
}
