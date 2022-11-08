const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide pt-4" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="rounded-circle active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="rounded-circle" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="rounded-circle" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner pb-1 mb-5 h-100">
                <div className="carousel-item h-100 active">
                    <div className="row h-100">
                        <div className="col-5 col-xl-7">
                            <p>15-21 DECEMBER</p>
                            <p className="fs-2 fw-bold text-capitalize">
                                All type <br />
                                of design <br />
                                conference
                            </p>
                            <button className="btn btn-primary text-white rounded-0">READ MORE</button>
                        </div>
                        <div className="col-7 col-xl-5">
                            <img src="/noimage512.png" className="d-block mx-auto w-100 h-auto pb-5" alt="b" />
                        </div>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="row h-100">
                        <div className="col-5 col-xl-7">
                            <p>15-21 DECEMBER</p>
                            <p className="fs-2 fw-bold text-capitalize">
                                All type <br />
                                of design <br />
                                conference
                            </p>
                            <button className="btn btn-primary text-white rounded-0">READ MORE</button>
                        </div>
                        <div className="col-7 col-xl-5">
                            <img src="/noimage512.png" className="d-block mx-auto w-100 h-auto pb-5" alt="b" />
                        </div>
                    </div>
                </div>
                <div className="carousel-item h-100">
                    <div className="row h-100">
                        <div className="col-5 col-xl-7">
                            <p>15-21 DECEMBER</p>
                            <p className="fs-2 fw-bold text-capitalize">
                                All type <br />
                                of design <br />
                                conference
                            </p>
                            <button className="btn btn-primary text-white rounded-0">READ MORE</button>
                        </div>
                        <div className="col-7 col-xl-5">
                            <img src="/noimage512.png" className="d-block mx-auto w-100 h-auto pb-5" alt="b" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;
