import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/menu">Poetic Inspiration</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Address</h5>
                    <address>
		              Somewhere on the roads of<br />
		              Delhi or Bangalore<br />
		              INDIA<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         abhilashapramteke@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/abhilash_ramteke/"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/abhilash.ramteke.4"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/abhilash-ramteke/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon" href="mailto:abhilashapramteke@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Developed by Abhilash Ramteke</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;