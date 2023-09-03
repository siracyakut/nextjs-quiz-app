const useEnd = (router, currentQuestion) => {
  if (currentQuestion === process.env.NEXT_PUBLIC_MAX_QUESTIONS - 1) {
    router.push("/results");
  } else {
    router.push("/");
  }
};

export default useEnd;
