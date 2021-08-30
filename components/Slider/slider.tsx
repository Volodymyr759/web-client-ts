import styles from './slider.module.css';

export const Slider = (): JSX.Element => {
	return (
		<div className={styles.slidercontainer}>
			<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="/logo-1.png" className="d-block w-100" alt="..." />
						<div className={styles.carouselcaption + " d-none" + " d-md-block"}>
							<h5 color="black">Property Space</h5>
							<p color="black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sint expedita officiis consequuntur optio architecto voluptatem possimus in perspiciatis eius?</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="/logo-2.png" className="d-block w-100" alt="..." />
						<div className={styles.carouselcaption + " d-none" + " d-md-block"}>
							<h5>Inspection Manager</h5>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sint expedita officiis consequuntur optio architecto voluptatem possimus in perspiciatis eius?</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="/logo-4.png" className="d-block w-100" alt="..." />
						<div className={styles.carouselcaption + " d-none" + " d-md-block"}>
							<h5>Diamond Emporium</h5>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sint expedita officiis consequuntur optio architecto voluptatem possimus in perspiciatis eius?</p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span className={styles.carouselcontrolprevicon} aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span className={styles.carouselcontrolnexticon} aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};