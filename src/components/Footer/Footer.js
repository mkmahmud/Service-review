import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Onlink Coaching</a>
                    <a className="link link-hover">1-2-1 personal training</a>
                    <a className="link link-hover">Small group personal trainng </a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Privacy</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Terms & Conditions</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Get In touch</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='bg-black text-center text-white py-2'>
                <p>Copyright © 2022 - All right reserved by ACME MK</p>
            </div>
        </div>
    );
};

export default Footer;