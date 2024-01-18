import React, { useEffect } from "react";
import { FaUserShield } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSearch, BsSun } from "react-icons/bs";
// import { useTheme } from "../Context/ThemeContext";
import { Form, FormCheck } from "react-bootstrap";
import { AiOutlineLogout } from "react-icons/ai";

const AdminHeader = () => {
  return (
    <div>
        <div 
      className="header"
      >
        <div className="row justify-content-between align-items-center">
        <div className="mb-3" style={{border:"1px solid #80808029",height:"80px",backgroundColor:"#80808029"}}>
          <div className="d-flex justify-content-end mt-6" style={{fontSize:"40px",padding:"18px 35px"}}>
          <AiOutlineLogout />

          </div>

            
            </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div class="input-group ">
              <span class="input-group-text" id="basic-addon1">
                <BsSearch />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search..."
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          
          {/* <div className="col-lg-7"></div> */}
          {/* <div
            className="col-lg-8  "
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "flex-end",
              gap: "30px",
              alignItems: "center",
              fontSize: "25px",
            }}
          >
            

             <img
              src="../assets/user.png"
              style={{ height: "50px", width: "50px" }}
            /> 
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default AdminHeader