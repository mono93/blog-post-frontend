const ForgotPassword = () => {
    return (
        <div className="signupWrapper">
            <div className="signupLeftSide">
                <h2> The Blog Post Project </h2>
            </div>
            <div className="signupMainSide">
                <div className="breadCrumbWrap">Forgot Password</div>
                <div className="mainTitle">The Blog Post</div>
                <div className="formWrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="formGroup validation-valid">
                                <label htmlFor="email">Email Address</label>
                                <div className="rel">
                                    <input type="text" name="email" className="inputField" id="email" />
                                    <span className=""></span>
                                    <span className=""></span>
                                    <span className="requiredDot"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="formGroup btnTopSpace">
                                <button type="submit" className="btn btn-warning btnFull" disabled>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword