import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the homepage!</p>
            
            <h2>About Vignan Group</h2>
            <p>
            Today the state of A.P is an acknowledged hub for education. It has especially become famous for its
            technical education. Dr. Rathaiah has indeed set the benchmark in the field of higher education and been
            the guiding light for many others in the state. Truly, Dr. Lavu. Rathaiah , with his relentless efforts and 
            dedication has changed the educational landscape of the state of Andhra Pradesh.
            </p>
            <p>
                Some of its most well-known colleges include:
            </p>
            <ul>
                <li>Vignan Institute of Technology & Science - [VITS], Hyderabad</li>
                <li>Vignan's Foundation for Science, Technology, and Research,Guntur</li>
                <li>Vignan's Institute of Information Technology - [VIIT],Visakhapatnam.</li>
                <li>Vignan Institute of Technology And Management, Berhampur </li>
                <li>Vignan Institute of Pharmaceutical Sciences - [VIPS], Nalgonda</li>
                <li>Vignan's Nirula Institute of Technology and Science for Women,Guntur</li>
            </ul>
            <p>
            To evolve into a center of excellence in Science & Technology through creative and innovative practices
            in teaching-learning, promoting academic achievement & research excellence to produce internationally accepted
            competitive and world class professionals who are psychologically strong and emotionally balanced imbued with social
            consciousness and ethical values
            </p>

            {/* Social Media Icons */}
            <h3>Follow Vignan Group on Social Media</h3>
            <div style={{ fontSize: '24px' }}>
                <a href="https://www.facebook.com/vignanuniversityofficial?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://x.com/VFSTR_Vignan" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/vignanuniversityofficial?igsh=MTVmbWJscXQ4eWEwYg==" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://vignan.ac.in" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
};

export default Home;
