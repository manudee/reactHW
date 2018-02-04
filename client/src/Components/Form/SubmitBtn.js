import React from 'react';

export const SubmitBtn = (props) => (
    <div className='text-center'>
        <button {...props} className='btn btn-success btn-lg'>{props.children} </button>
    </div>
);