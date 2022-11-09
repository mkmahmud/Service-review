import React from 'react';
import useTitle from '../../Hoocks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='blogs py-20'>
            <h2 className='text-5xl font-bold'>Blog</h2>
            <div className="blogs p-5 text-left ">
                <div className="singelBlogs p-5 my-5 bg-blue-300 text-lg">
                    <h2 className="ques font-bold bg-black text-white py-2">Difference between SQL and NoSQL</h2>
                    <h2 className="ans">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</h2>
                </div>
                <div className="singelBlogs p-5 my-5 bg-blue-300 text-lg">
                    <h2 className="ques font-bold bg-black text-white py-2">What is JWT, and how does it work?</h2>
                    <h2 className="ans">What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</h2>
                </div>
                <div className="singelBlogs p-5 my-5 bg-blue-300 text-lg">
                    <h2 className="ques font-bold bg-black text-white py-2">What is the difference between javascript and NodeJS?</h2>
                    <h2 className="ans">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</h2>
                </div>
                <div className="singelBlogs p-5 my-5 bg-blue-300 text-lg">
                    <h2 className="ques font-bold bg-black text-white py-2">How does NodeJS handle multiple requests at the same time?</h2>
                    <h2 className="ans">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</h2>
                </div>
            </div>
        </div>
    );
};

export default Blog;