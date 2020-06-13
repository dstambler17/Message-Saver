import React from 'react'
import Button from 'react-bootstrap/Button';

export default function MainPage() {
    return (
        <div className="center-main-content">
            <h1 className='title-font item-center'>Message.ly</h1>
            <h3 className="item-center">Automatically Save and Organize Your Messages</h3>
            <Button variant="primary" size="lg" className="minor-top-margin">
                Get Started with Messenger
            </Button>
        </div>
    )
}
