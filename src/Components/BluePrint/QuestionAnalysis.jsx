import React from 'react'
import { Container, Table } from 'react-bootstrap'

function QuestionAnalysis() {
    return (

        <div>
            <Container className='mt-4' style={{border:"5px solid black", borderRadius:"15px"}}>
                <div className='mt-4' >
                    <h3 className='text-center'>VII Standard Second Language English</h3>

                    <h4>QUESTION ANALYSIS</h4>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Qn. No.</th>
                            <th>Objective</th>
                            <th>Specification</th>
                            <th>Content Unit</th>
                            <th>Type Of QN.</th>
                            <th>Marks</th>
                            <th>Diffeculty Level</th>
                            <th>Time Required to Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 to 4</td>
                            <td>Kn</td>
                            <td>recalls</td>
                            <td>Vocabulary</td>
                            <td>V.A.S</td>
                            <td>4</td>
                            <td>E</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Kn</td>
                            <td>recalls</td>
                            <td>Trees</td>
                            <td>V.S</td>
                            <td>4</td>
                            <td>E</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Kn</td>
                            <td>recalls</td>
                            <td>Sindabad</td>
                            <td>V.A.S</td>
                            <td>2</td>
                            <td>E</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>7 & 8</td>
                            <td>Kn</td>
                            <td>recalls</td>
                            <td>The Three Golden Apple</td>
                            <td>V.A.S</td>
                            <td>2</td>
                            <td>E</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Kn</td>
                            <td>recalls</td>
                            <td>The River</td>
                            <td>V.S.A</td>
                            <td>2</td>
                            <td>E</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Compr.</td>
                            <td>grasps</td>
                            <td>The legend of the Narmada</td>
                            <td>S.A</td>
                            <td>2</td>
                            <td>A</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Compr.</td>
                            <td>grasps</td>
                            <td>The Chipco Architect</td>
                            <td>V.A.S</td>
                            <td>4</td>
                            <td>E</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Appr.</td>
                            <td>love for adventure</td>
                            <td>Trees</td>
                            <td>V.S</td>
                            <td>4</td>
                            <td>E</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Cromp.</td>
                            <td>recalls</td>
                            <td>Voyage around the world</td>
                            <td>S.A</td>
                            <td>2</td>
                            <td>A</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Kn</td>
                            <td>recalls</td>
                            <td>The River</td>
                            <td>V.S.A</td>
                            <td>2</td>
                            <td>E</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Compr.</td>
                            <td>grasps</td>
                            <td>The legend of the Narmada</td>
                            <td>S.A</td>
                            <td>2</td>
                            <td>A</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Compr.</td>
                            <td>grasps</td>
                            <td>The Chipco Architect</td>
                            <td>V.A.S</td>
                            <td>4</td>
                            <td>E</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Appr.</td>
                            <td>love for adventure</td>
                            <td>Trees</td>
                            <td>V.S</td>
                            <td>4</td>
                            <td>E</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Cromp.</td>
                            <td>recalls</td>
                            <td>Voyage around the world</td>
                            <td>S.A</td>
                            <td>2</td>
                            <td>A</td>
                            <td>2</td>
                        </tr>

                    </tbody>
                </Table>
                <div className='d-flex mt-2'>
                    <b>Note<span style={{ color: "red" }}>*</span></b>
                    <p>V.S.A(Very short answer),S.A( short answer ) A(Average) ,E(Easy),M(medium)</p>
                </div>
            </Container>

        </div>


    )
}

export default QuestionAnalysis