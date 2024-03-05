import React from 'react'

export const CoverPage = () => {
    return (
        <div style={{ backgroundColor: '#ffe4c4', padding: '15px' }}>
            <div className='row align-items-center mb-5 justify-content-around'>
                <div className="col-lg-2">
                    <img
                        src="../Images/asd-logo.PNG"
                        alt="adminlogo"
                        style={{ width: '170px', height: "170px" }}
                    />
                </div>
                <div className="col-lg-6 text-center">
                    <h1>Name Of The School</h1>
                    <h3>First Semester Exam 2023-24</h3>
                </div>
            </div>
            <div className='d-flex justify-content-around mb-5'>
                <p className='fw-bold fs-4'>Subject :- </p>
                <p className='fw-bold fs-4'>Class :- </p>
            </div>
            <div className='mb-5'>
                <ul style={{ listStyle: 'none', textAlign: 'center', fontSize: '26px', fontStyle: 'italic' }}>
                    <li>Question Paper Preparation</li>
                    <li>Blue Print</li>
                    <li>Answer Sheet</li>
                    <li>Question Analysation Details</li>
                </ul>
            </div>
            <div className="d-flex justify-content-around">
                <p className='fw-bold'>Subject Teacher :-</p>
                <div>
                    <p className='fw-bold mb-0'>Head Master</p>
                    <p className='mb-0'>Or</p>
                    <p className='fw-bold mb-0'>Principal</p>
                </div>
            </div>
        </div>
    )
}
