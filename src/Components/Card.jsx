import React from "react";

const Card = () => {
	return (
		<div>
			<div
				style={{
					width: "300px",
					backgroundColor: "#15151d",
					borderRadius: "7px",
					overflow: "hidden",
					margin: "0 auto",
				}}
			>
				<img
					style={{ width: "300px", height: "150px" }}
					src="https://i.ytimg.com/vi/EPyl1LgNtoQ/maxresdefault.jpg"
					alt="countries_flags"
				/>
				<div style={{ padding: "0px 10px 10px 10px" }}>
					<h3 style={{ color: "#4672fe" }}>Counries App</h3>
					<p style={{textAlign: "center"}}>
						Lorem ipsum dolor sit amet consectetur, adipisicing,
						elit. Rerum fugit, deserunt, dicta officiis alias cumque
						quibusdam eligendi velit unde rem neque, similique
						harum. Totam perspiciatis eveniet officiis iure, autem,
						temporibus.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
