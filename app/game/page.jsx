"use client";

import { useEffect } from "react";
import useCountdown from "@/hooks/useCountdown";
import { getQuestions } from "@/store/questions/actions";

import Countdown from "@/components/countdown";
import Game from "@/components/game";

export default function GamePage() {
  const countdown = useCountdown({ seconds: 5 });

  useEffect(() => {
    getQuestions();
  }, []);

  return countdown > 0 ? <Countdown count={countdown} /> : <Game />;
}
