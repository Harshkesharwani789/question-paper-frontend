import React from 'react'
import Table from 'react-bootstrap/Table';
import "../SyllabusCopy/SyllabusCopy.css"
const SyllabusCopy = () => {
    return (
        <div>
            {/* first sem first page starts here  */}
            <div className='question-paper-display'>
                <div >
                    <h3 style={{ textAlign: "center", paddingTop: "10px" }}>Annual Lession Plan for 2024-25</h3>
                    <h5 style={{ textAlign: "center" }}>7th Standard</h5>
                    <h5 style={{ textAlign: "center" }}>1st Semester</h5>

                </div>
                <div className='details-container '>
                    <Table responsive striped bordered hover size='sm' style={{ border: "1px solid" }}>
                        <thead>
                            <tr>
                                <th>SL. No.</th>
                                <th>Month</th>
                                <th>Subject</th>
                                <th>Lession Name</th>
                                <th>Duration</th>
                                <th>Evaluation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>May <br /> 2024</td>
                                <td colSpan={2}>School opening time</td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td rowSpan={11}>2</td>
                                <td rowspan={11}>June <br /> 2024</td>
                                <td>Bridging Work</td>
                                <td>7th std. Bridging work</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Kannada</td>
                                <td>Lession Name</td>
                                <td>14 hrs.</td>
                                <td rowSpan={10}>CCE Activities</td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>Lession Name</td>
                                <td>10 hrs.</td>
                            </tr>
                            <tr>
                                <td>Hindi</td>
                                <td>Lession Name</td>
                                <td>8 hrs.</td>
                            </tr>
                            <tr>
                                <td>Mathematics</td>
                                <td>Lession Name</td>
                                <td>12 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Science</td>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Social Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>

                            <tr>
                                <td rowSpan={2}> Physical Eduation</td>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>


                            <tr>
                                <td rowSpan={24}>3</td>
                                <td rowspan={24}>July <br /> 2024</td>
                            </tr>


                            <tr>
                                <td rowSpan={3}>Kannada</td>
                                <td>Lession Name</td>
                                <td>7 hrs.</td>
                                <td rowSpan={23}> FA-1 Exam - CCE Activities</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>10 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>7 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}> English</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>9 hrs.</td>
                            </tr>

                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}> Hindi</td>
                                <td>Lession Name</td>
                                <td>3 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>3 hrs.</td>
                            </tr>

                            <tr>
                                <td rowSpan={3}> Mathematics</td>
                                <td>Lession Name</td>
                                <td>8 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}> Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={5}> Social Science</td>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>3 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>3 hrs.</td>
                            </tr>

                            <tr>
                                <td rowSpan={3}> Physical Eduation</td>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>

                            <tr>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>


                        </tbody>
                    </Table>
                </div>
            </div>

            {/* first sem second page starts here  */}
            <div className='question-paper-display'>
                <div className='details-container '>
                    <Table responsive striped bordered hover size='sm' style={{ border: "1px solid" }}>
                        <thead>
                            <tr>
                                <th>SL. No.</th>
                                <th>Month</th>
                                <th>Subject</th>
                                <th>Lession Name</th>
                                <th>Duration</th>
                                <th>Evaluation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={15}>4</td>
                                <td rowspan={15}>August <br /> 2024</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Kannada</td>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                                <td rowSpan={15}>FA-1 Exam - CCE Activities
</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> English</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Hindi</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Mathematics</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Social Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Physical Eduation</td>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>

                            <tr>
                                <td rowSpan={28}>5</td>
                                <td rowspan={28}>September <br /> 2024</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>Kannada</td>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                                <td rowSpan={28}>CCE Activities</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> English</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> Hindi</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> Mathematics</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={5}> Social Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}> Physical Eduation</td>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

            {/* secod sem first page starts here  */}
            <div className='question-paper-display'>
                <div >
                    <h3 style={{ textAlign: "center", paddingTop: "10px" }}>Annual Lession Plan for 2024-25</h3>
                    <h5 style={{ textAlign: "center" }}>7th Standard</h5>
                    <h5 style={{ textAlign: "center" }}>2nd Semester</h5>

                </div>
                <div className='details-container '>
                    <Table responsive striped bordered hover size='sm' style={{ border: "1px solid" }}>
                        <thead>
                            <tr>
                                <th>SL. No.</th>
                                <th>Month</th>
                                <th>Subject</th>
                                <th>Lession Name</th>
                                <th>Duration</th>
                                <th>Evaluation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>October <br /> 2024</td>
                                <td colSpan={2}>SA-1 Exam Evaluation</td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <td rowSpan={11}>2</td>
                                <td rowspan={11}>November <br /> 2024</td>
                                <td>Bridging Work</td>
                                <td>7th std. Bridging work</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Kannada</td>
                                <td>Lession Name</td>
                                <td>14 hrs.</td>
                                <td rowSpan={10}>CCE Activities</td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>Lession Name</td>
                                <td>10 hrs.</td>
                            </tr>
                            <tr>
                                <td>Hindi</td>
                                <td>Lession Name</td>
                                <td>8 hrs.</td>
                            </tr>
                            <tr>
                                <td>Mathematics</td>
                                <td>Lession Name</td>
                                <td>12 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Science</td>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Social Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>

                            <tr>
                                <td rowSpan={2}> Physical Eduation</td>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>


                            <tr>
                                <td rowSpan={24}>3</td>
                                <td rowspan={24}>January <br /> 2024</td>
                            </tr>


                            <tr>
                                <td rowSpan={3}>Kannada</td>
                                <td>Lession Name</td>
                                <td>7 hrs.</td>
                                <td rowSpan={23}> FA-1 Exam - CCE Activities</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>10 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>7 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}> English</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>9 hrs.</td>
                            </tr>

                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}> Hindi</td>
                                <td>Lession Name</td>
                                <td>3 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>3 hrs.</td>
                            </tr>

                            <tr>
                                <td rowSpan={3}> Mathematics</td>
                                <td>Lession Name</td>
                                <td>8 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}> Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> Social Science</td>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>3 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>3 hrs.</td>
                            </tr>

                            <tr>
                                <td rowSpan={3}> Physical Eduation</td>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>

                            <tr>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>


                        </tbody>
                    </Table>
                </div>
            </div>

            {/* second sem second  page starts here  */}
            <div className='question-paper-display'>
                <div className='details-container '>
                    <Table   responsive striped bordered hover size='sm' style={{ border: "1px solid" }}>
                        <thead>
                            <tr>
                                <th>SL. No.</th>
                                <th>Month</th>
                                <th>Subject</th>
                                <th>Lession Name</th>
                                <th>Duration</th>
                                <th>Evaluation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={15}>4</td>
                                <td rowspan={15}>February <br /> 2024</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Kannada</td>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                                <td rowSpan={15}>FA-1 Exam - CCE Activities</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> English</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Hindi</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Mathematics</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Social Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}> Physical Eduation</td>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>

                            <tr>
                                <td rowSpan={28}>5</td>
                                <td rowspan={28}>March <br /> 2024</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>Kannada</td>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                                <td rowSpan={28}>CCE Activities</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> English</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> Hindi</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> Mathematics</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}> Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={5}> Social Science</td>
                                <td>Lession Name</td>
                                <td>6 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>4 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}> Physical Eduation</td>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>2 hrs.</td>
                            </tr>
                            <tr>
                                <td>Lession Name</td>
                                <td>5 hrs.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default SyllabusCopy
