import React, { useState, useEffect, useRef, useContext } from 'react';
import { MouseContext } from '../../context/MouseContext';
import { Box } from '@mui/material';

const MouseTracker = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: -100, y: -100 });
  const [isMouseDevice, setIsMouseDevice] = useState(false);
  const circleRequestRef = useRef<any>(null);
  const dotRequestRef = useRef<any>(null);
  const { hover } = useContext(MouseContext);

  useEffect(() => {
    setIsMouseDevice(window.matchMedia('(pointer: fine)').matches);
    const handleMouseMove = (event: MouseEvent) => setTargetPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // eslint-disable-next-line
  const animateCircle = () => {
    setCirclePosition((prevPosition) => {
      const dx = targetPosition.x - prevPosition.x;
      const dy = targetPosition.y - prevPosition.y;
      return { x: prevPosition.x + dx * 0.1, y: prevPosition.y + dy * 0.1 };
    });

    circleRequestRef.current = requestAnimationFrame(animateCircle);
  };

  // eslint-disable-next-line
  const animateDot = () => {
    const t = hover ? 1 : 0.4;
    setDotPosition((prevPosition) => {
      const dx = targetPosition.x - prevPosition.x;
      const dy = targetPosition.y - prevPosition.y;
      return { x: prevPosition.x + dx * t, y: prevPosition.y + dy * t };
    });

    dotRequestRef.current = requestAnimationFrame(animateDot);
  };

  useEffect(() => {
    circleRequestRef.current = requestAnimationFrame(animateCircle);
    dotRequestRef.current = requestAnimationFrame(animateDot);
    return () => {
      cancelAnimationFrame(circleRequestRef.current);
      cancelAnimationFrame(dotRequestRef.current);
    };
  }, [animateCircle, animateDot, targetPosition]);


  return (
    isMouseDevice ? <Box>
      {hover || (
        <Box
          sx={{
            position: 'fixed',
            top: circlePosition.y - 20,
            left: circlePosition.x - 20,
            width: 40,
            height: 40,
            borderRadius: '50%',
            borderColor: 'rgb(150, 190, 230)',
            borderStyle: 'solid',
            borderWidth: 1,
            pointerEvents: 'none',
            zIndex: 999,
          }}
        />
      )}
      <Box
        sx={{
          position: 'fixed',
          top: dotPosition.y,
          left: dotPosition.x,
          width: hover ? 50 : 5,
          height: hover ? 50 : 5,
          borderRadius: '50%',
          backgroundColor: hover ? 'rgba(150, 190, 230, 0.3)' : 'rgba(150, 190, 230, 1)',
          pointerEvents: 'none',
          zIndex: 1000,
          transform: `translate(-50%, -50%)`,
          transition: 'width 0.5s, height 0.5s, background-color 0.8s'
        }}
      />
    </Box> : <></>
  );

};

export default MouseTracker;
