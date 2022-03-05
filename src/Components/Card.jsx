import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs: "80vw", md: "90vw"},
  height: "80vh",
  bgcolor: "#15151d",
  border: "none",
  borderRadius: "7px",
  boxShadow: 24,
  p: {xs: 1, md: 4},
  display: "flex",
  flexDirection: {xs: "column", md: "row"},
  overflow: "auto",
};
const Card = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <CardContainer>
        <img src="https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2022/03/Ukraine-Flag-gID_4.png" />
        <div className="info">
          <h1>Countries</h1>
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
          <Box sx={{ width: {xs: "90%", md:"45%"}, margin: "0 auto"}}>
            <h1>Text in a modal</h1>
            <p style={{textAlign: "justify", width: "100%"}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              modi fugit placeat in dolor delectus eligendi ea, necessitatibus
              aperiam voluptates laudantium natus deleniti quaerat. Quasi animi
              repellat repudiandae magnam! Modi!
            </p>
            <div style={{ textAlign: "left" }}>
              <h2>Features</h2>
              <ul>
                <li>React</li>
                <li>React</li>
                <li>React</li>
              </ul>
            </div>
            <div style={{ textAlign: "left" }}>
              <h2>Stack</h2>
              <ul>
                <li>React</li>
                <li>React</li>
                <li>React</li>
              </ul>
            </div>
          </Box>
          <Box sx={{ width: {xs: "85%", md:"55%"}, margin: "0 auto"}}>
            <img
              style={{ width: "100%", height: "100%"}}
              src="https://d3qvyul2tp4j8.cloudfront.net/i/VuciF2U4cZ.jpg"
              alt="ukrain flag"
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

const CardContainer = styled("div")`
  min-width: 200px;
  max-width: 300px;
  height: 300px;
  margin: 15px;
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
    text-align: center;
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
