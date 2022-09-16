import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  font-size: 20;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function LayoutAnimation() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked(!clicked);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
      <Box>{clicked ? <Circle layoutId="circle" /> : null} </Box>
    </Wrapper>
  );
}

export default LayoutAnimation;
