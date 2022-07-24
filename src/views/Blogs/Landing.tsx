import { useNavigate } from "react-router-dom";

const Landing = () => {

    const navigate = useNavigate();

    return (
        <div className="landingWrapper">
            <div className="landingPageText">
                <h2> Welcome to The blog post project </h2>
                <p> It is hobby project started in the month of july 2022 </p>
                <p> This is a full stack web sites to demostarte all the aspects of front end and backend development</p>
                <p> Following techologies are being used to build this website </p>
                <div className="landingPageImg">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" height='100px' />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" height='100px' />
                    <img src="https://camo.githubusercontent.com/5f54c0817521724a2deae8dedf0c280a589fd0aa9bffd7f19fa6254bb52e996a/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f2d736d616c6c2e737667" height='100px' />
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/postgresql.png" height='100px' />
                    <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_0016c93c710cf35990b999cba3a59bae/firebase.png" height='100px' />
                </div>
                <div className="joiningSection">
                    <p > Want to explore? join us <a href={void (0)} onClick={() => navigate('/signup')}>SignUp</a> </p>
                </div>
            </div>
        </div>
    )
}

export default Landing