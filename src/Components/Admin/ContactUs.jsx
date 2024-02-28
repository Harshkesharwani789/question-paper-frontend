import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function ContactUs() {
    return (
        <div className="contact-us-page">
            <header>
                <img
                    style={{ width: "100%", height: "300px" }}
                    src="../Images/header.jpg" alt="Contact Us Header" />
            </header>
            <div className="d-flex mt-4 justify-content-around">
                <div className="col-md-5">
                    <h2>Video Instructions</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UVAyIh5V4NY?si=MVb2H_D-s8EuYFSz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="col-md-5"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "bisque",
                        width: "50%", /* Adjust width as needed */
                        padding: "20px", /* Add padding for spacing */
                        border: "1px solid #ccc", /* Add border for better visibility */
                        borderRadius: "5px" /* Add border radius for rounded corners */
                    }}
                >
                    <div>
                        <h2>Contact Information</h2>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <FaPhoneAlt />
                            <b>Phone:</b>
                            <span style={{ marginLeft: "5px" }}>123-456-7890</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <MdEmail />
                            <b>Email:</b>
                            <span style={{ marginLeft: "5px" }}>info@example.com</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="d-flex mt-5 justyfy-content-center">
                {/* <div className='col-sm-4'>
                    <div class="wrapper">
                        <svg>
                            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                                Contact Us
                            </text>
                        </svg>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default ContactUs