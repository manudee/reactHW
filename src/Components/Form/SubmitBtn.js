import React from 'react';

export const SubmitBtn = (props) => (
    <div className='text-center'>
        <button className='btn btn-success btn-lg' type="submit">{props.children} </button>
    </div>
);