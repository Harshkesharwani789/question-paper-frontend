import React from 'react'
import { Container, Row, Table } from 'react-bootstrap'

function Tutorial() {
    return (
        <div>
            <Container>
                <Row className='mt-4'>
                    <div className='col-md-8 mt-4' style={{backgroundColor:"aliceblue", padding:"18px"}}>
                        <div className='mt-4'>
                            <h2 className='mb-4'>Test Generator Tutorial</h2>
                            <Table  style={{border:"1px solid #dddddd"}} className='table_data'>                            
                                <tbody>
                                    <tr>
                                        <td>IN</td>
                                        <td><a href=''>Test Generator Introduction Video</a></td>                                       
                                    </tr>
                                    <tr>
                                        <td>01</td>
                                        <td><a href=''>How to Create Question Paper (PDF) in Express Mode</a></td>                                       
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td><a href=''>How to Create Question Paper (PDF) in Automated Mode</a></td>                                       
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td><a href=''>	How to Create Question Paper (PDF) in Manual Mode</a></td>                                       
                                    </tr>
                                    <tr>
                                        <td>04</td>
                                        <td><a href=''>	How to Create Online Test (Objective only) in Express Mode</a></td>                                       
                                    </tr>
                                    <tr>
                                        <td>05</td>
                                        <td><a href=''>	How to Create Online Test (Subjective + Objective) in Express Mode</a></td>                                       
                                    </tr>
                                    <tr>
                                        <td>06</td>
                                        <td><a href=''>How to Create Worksheet (PDF) in Express Mode</a></td>                                       
                                    </tr>
                                    <tr>
                                        <td>07</td>
                                        <td><a href=''>How to Create Papers with your Own Questions</a></td>                                       
                                    </tr>
                                    <tr>
                                        <td>08</td>
                                        <td><a href=''> How to Create Online Test (JEE & NEET) in Express Mode</a></td>                                       
                                    </tr>
                                    <tr>
                                        <td>09</td>
                                        <td><a href=''>How to Create Online Test (JEE main) in Auromated Mode</a></td>                                       
                                    </tr>
                                  
                                </tbody>
                            </Table>
                        </div>

                    </div>
                    <div className='col-md-4 mt-4' style={{backgroundColor:"aliceblue", padding:"18px"}}>
                        <div className='mt-4' style={{fontSize:"20px", lineHeight:"38px"}}>
                            <h2 className='mb-4'>Recent Posts</h2>
                           <a href="">Role of Emotional Intelligence in Child Pyschology</a>
                           <a href="">
                           Key to Effective Board Examination Preparation</a>
                           <a href="">AISSEE Mock Test Creator App</a>
                           <a href="">Sunset of Online Class Scheduling Feature on Examin8</a>
                           <a href="">How Teachers Can Make The Best Use of AI Tools in Education</a>
                        </div>

                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Tutorial