import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  width: 50vw;
  height: 50vh;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  font-size: 20;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  border: none;
  background-color: "#fff";
`;

const boxVars = {
  hover: (i: string) => ({
    scale: 1.2,
    x: i === "2" || i === "4" ? 20 : -20,
    y: i === "3" || i === "4" ? 20 : -20,
  }),
};
const overlayVars = {
  invisible: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  visible: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const buttonVars = {
  initial: (isSwitchOn: boolean) => ({
    color: isSwitchOn ? "tomato" : "blue",
    fontWeight: 700,
  }),
  hover: (isSwitchOn: boolean) => ({
    color: isSwitchOn ? "tomato" : "blue",
    scale: 1.2,
  }),
};

function FinalApp() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked(!clicked);
  const [overlayoutId, setOverlayoutId] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((i) => (
          <Box
            custom={i}
            variants={boxVars}
            onClick={() => {
              setOverlayoutId(i);
              toggleClicked();
            }}
            layoutId={i}
            key="i"
            whileHover="hover"
          >
            {i === "2" && isSwitchOn ? (
              <Circle layoutId="circle" />
            ) : i === "3" && !isSwitchOn ? (
              <Circle layoutId="circle" />
            ) : null}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {clicked && (
          <Overlay
            onClick={() => {
              setOverlayoutId("");
              toggleClicked();
            }}
            variants={overlayVars}
            initial="invisible"
            animate="visible"
            exit="invisible"
          >
            <Box style={{ width: 200, height: 200 }} layoutId={overlayoutId} />
          </Overlay>
        )}
      </AnimatePresence>
      <Button
        variants={buttonVars}
        whileHover="hover"
        onClick={() => setIsSwitchOn(!isSwitchOn)}
        custom={isSwitchOn}
        initial="initial"
        animate="initial"
      >
        Switch
      </Button>
    </Wrapper>
  );
}

export default FinalApp;
