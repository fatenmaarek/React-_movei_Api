// MyButtons.js
import React from 'react';
import { Button } from 'react-bootstrap';

const MyButtons = (props) => {
  return (
    <div className='ms-5'>
       <Button className="favorite-btn mt-2 ms-5" onClick={props.onClick}>
        {props.action}
      </Button>
    </div>
  );
}

export default MyButtons;
