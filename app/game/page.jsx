"use client";

import React, { useEffect } from "react";
import useCountdown from "@/_ui/hooks/useCountdown";
import { useDispatch } from "react-redux";
import { getQuestions } from "@/_ui/store/questions";
import Countdown from "@/_ui/components/Countdown";
import Game from "@/_ui/components/Game";

const GamePage = () => {
  const countdown = useCountdown({ seconds: 5 });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return countdown > 0 ? <Countdown count={countdown} /> : <Game />;
};

export default GamePage;
