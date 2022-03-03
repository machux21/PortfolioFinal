import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "70vh",
  bgcolor: "#15151d",
  border: "none",
  borderRadius: "7px",
  boxShadow: 24,
  p: 4,
};
const Card = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/*<Box
				sx={{
					width: { xs: "90vw", md: "23.7vw" },
					margin: { xs: "5px", md: "7px" },
					backgroundColor: "#15151d",
					borderRadius: "7px",
					overflow: "hidden",
				}}
				onClick={handleOpen}
			>
				<img
					style={{ width: "100%", height: "150px" }}
					src="https://i.ytimg.com/vi/EPyl1LgNtoQ/maxresdefault.jpg"
					alt="countries_flags"
				/>
				<div style={{ padding: "0px 10px 10px 10px" }}>
					<h3 style={{ color: "#4672fe" }}>Counries App</h3>
					<p style={{ textAlign: "center" }}>
						Lorem ipsum dolor sit amet consectetur, adipisicing,
						elit. Rerum fugit, deserunt, dicta officiis alias cumque
						quibusdam eligendi velit unde rem neque, similique
						harum. Totam perspiciatis eveniet officiis iure, autem,
						temporibus.
					</p>
				</div>
			</Box>*/}
      <CardContainer>
        <img src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <div class="info">
          <h1>Road</h1>
          <p>
            Lorem Ipsum is simply dummy text from the printing and typeseting
            industry
          </p>
          <button onClick={handleOpen}>Read More</button>
        </div>
      </CardContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const CardContainer = styled("div")`
  width: 280px;
  height: 360px;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: translateY(20px);
  }
  &:hover:before {
    opacity: 1;
  }
  &:hover .info {
    opacity: 1;
    transform: translateY(0px);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }
  .info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
  }
  .info h1 {
    margin: 0px;
  }
  .info p {
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;
  }
  .info button {
    padding: 0.6rem;
    outline: none;
    border: none;
    border-radius: 3px;
    background: white;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
  }
  .info button:hover {
    background: dodgerblue;
    color: white;
  }
`;
export default Card;
