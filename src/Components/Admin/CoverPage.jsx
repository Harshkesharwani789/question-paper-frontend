import React from 'react'
import { BiAnalyse, BiSpreadsheet } from 'react-icons/bi';
import { IoNewspaperOutline } from 'react-icons/io5'
import { SiBlueprint } from "react-icons/si";

export const CoverPage = () => {
    return (
        <div style={{padding: '15px',border:'2px solid #000', width:'750px', margin:'auto', borderRadius:'20px', height:'1100px' }}>
            <div className='d-flex align-items-center mb-5 justify-content-around'>
                <div >
                    <img
                        src="../Images/asd-logo.PNG"
                        alt="adminlogo"
                        style={{ width: '170px', height: "170px",  }}
                    />
                </div>
                <div className=" text-center">
                    <h1>Name Of The School</h1>
                    <h3>First Semester Exam 2023-24</h3>
                </div>
            </div>
            <div className='d-flex justify-content-around mb-5' style={{marginTop:'130px'}}>
                <p className='fw-bold fs-4'>Subject :- </p>
                <p className='fw-bold fs-4'>Class :- </p>
            </div>
            <div className='mb-5' style={{marginTop:'150px'}}>
                <ul style={{ listStyle: 'none', textAlign: 'center', fontSize: '26px', fontStyle: 'italic' }}>
                    <li className='d-flex gap-2 align-items-center justify-content-center'><IoNewspaperOutline />Question Paper Preparation</li>
                    <li className='d-flex gap-2 align-items-center justify-content-center'> <SiBlueprint />Blue Print</li>
                    <li className='d-flex gap-2 align-items-center justify-content-center'><BiSpreadsheet />Answer Sheet</li>
                    <li className='d-flex gap-2 align-items-center justify-content-center'><BiAnalyse />Question Analysation Details</li>
                </ul>
            </div>
            <div className="d-flex justify-content-around" style={{marginTop:'280px'}}>
                <p className='fw-bold'>Subject Teacher :-</p>
                <div>
                    <span className='fw-bold mb-0'>Head Master</span>/
                    <span className='fw-bold mb-0'>Principal</span>
                </div>
            </div>
        </div>
    )
}
