const Form = () => {
    return (
        <form action="submit">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <p className="fs-6">CONTACT US NOW</p>
                    <p className="fs-2 fw-bold">Ask a question</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facilis voluptate optio nostrum harum minima alias.</p>
                    <div className="row g-3">
                        <div className="col-6">
                            <input type="text" className="form-control rounded-0" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control rounded-0" placeholder="Last name" aria-label="Last name" />
                        </div>
                        <div className="col-12">
                            <textarea className="form-control rounded-0" rows={5} placeholder="Send a message"></textarea>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-primary text-white rounded-0">Send a message</button>
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-block col-12 col-lg-6">
                    <img className="img-fluid" src="/noimage512.png" alt="" />
                </div>
            </div>
        </form>
    )
}

export default Form;
