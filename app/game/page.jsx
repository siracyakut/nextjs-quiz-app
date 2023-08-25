"use client";

import React, { useEffect } from "react";
import useCountdown from "@/hooks/useCountdown";
import { useDispatch } from "react-redux";
import { getQuestions } from "@/store/questions";
import Countdown from "@/components/Countdown";
import Game from "@/components/Game";

const GamePage = () => {
  const countdown = useCountdown({ seconds: 5 });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  return countdown > 0 ? <Countdown count={countdown} /> : <Game />;
};

export default GamePage;
