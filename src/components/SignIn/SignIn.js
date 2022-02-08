import React from 'react';
import { Form , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import './SignIn.css'
import useFirebas from '../../hooks/useFirebase';

const SignIn = () => {
    const icon = <FontAwesomeIcon icon={faGoogle} />
    const {signInWithGoogle , user} = useFirebas()
    return (
       

       <div style={{marginTop:50}}>
         <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 pb-5">
                  
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="http://www.digitalhubamazon.com/wp-content/uploads/2021/03/501-5010058_online-store-png-e-business-ecommerce-clipart.png" className="image"/> </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                        <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                        <div className="facebook text-center me-3">
                            <div onClick={signInWithGoogle} >{icon}</div>
                        </div>
                        <div className="twitter text-center me-3">
                            <div className="fa fa-twitter">{icon}</div>
                        </div>
                        <div className="linkedin text-center me-3">
                            <div className="fa fa-linkedin">{icon}</div>
                        </div>
                    </div>
                    <div className="row px-3 mb-4">
                        <div className="line"></div> <small className="or text-center">Or</small>
                        <div className="line"></div>
                    </div>
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Email Address</h6>
                        </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"/> </div>
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Password</h6>
                        </label> <input type="password" name="password" placeholder="Enter password"/> </div>
                    <div className="row px-3 mb-4">
                        <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="/" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                    </div>
                    <div className="row mb-3 px-3"><Link to='/home'> <button onClick={signInWithGoogle} type="submit" className="btn btn-blue text-center">Login</button> </Link>
                    </div>
                    <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <Link to="/reg"className="text-danger ">Register</Link></small> </div>
                </div>
            </div>
        </div>
        <div className="bg-blue py-4">
            
        </div>
    </div>
</div>
       </div>
    );
};

export default SignIn;