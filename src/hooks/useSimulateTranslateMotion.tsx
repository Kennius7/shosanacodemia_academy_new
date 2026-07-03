import { useEffect, useState } from "react";

interface useSimulateProps {
  isLeftToRight: boolean;
  numberOfBreaks: number;
  duration: number;
  maxDim: number;
  minDim: number;
}

export const useSimMotion = ({
  isLeftToRight,
  numberOfBreaks,
  duration,
  maxDim,
  minDim,
}: useSimulateProps) => {
  const [resultDim, setResultDim] = useState<number>(maxDim);
  const timeBreaks = duration / numberOfBreaks;
  const dimDiff = maxDim - minDim;

  useEffect(() => {
    const dimensionIncrementInterval = setInterval(() => {
      if (!isLeftToRight && resultDim > minDim) {
        setResultDim((prev) => prev - dimDiff);
      }

      if (isLeftToRight && resultDim < maxDim) {
        setResultDim((prev) => prev + dimDiff);
      }
    }, timeBreaks);

    return () => clearInterval(dimensionIncrementInterval);
  }, [dimDiff, isLeftToRight, timeBreaks, maxDim, minDim, resultDim]);

  return resultDim;
};
