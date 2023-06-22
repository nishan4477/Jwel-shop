import React from "react";
import CatData from "../Data/CatData";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="cat">
      <div className="container">
        <div className="row">
          {CatData.map((a) => (
            <div className="col-lg-4">
                <div className="catbox">
                    <img className="w-100" src={a.image}></img>
                    <p className="text-start text-dark fs-2 fw-2">{a.catname}</p>
                    <div className="caticon">
                        <ul  className="d-flex justify-content-center gap-5 align-items-center text-light">
                           <Link to=""><li className="bg-danger px-2 rounded"><i className="fa-solid fa-heart"></i></li></Link> 
                           <Link to=""><li className="bg-light px-2 rounded"><i className="fa-solid fa-message"></i></li></Link> 
                          
                        </ul>


                    </div>
                </div>
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
