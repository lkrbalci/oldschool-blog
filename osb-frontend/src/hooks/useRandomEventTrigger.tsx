import { useState, useEffect } from "react";

const useRandomValues = (): string | null => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;

    const values: string[] = ["event1", "event2", "event3", "event4", "event5"];
    const getRandomValue = (): string =>
      values[Math.floor(Math.random() * values.length)];

    const updateValue = () => {
      if (isMounted) {
        const newValue = getRandomValue();
        setValue(newValue);

        const randomTriggerMinMaxDifference = 16000;
        const randomTriggerMin = 8000;
        const keepEventAliveTime = 5000;
        timeout1 = setTimeout(() => {
          if (isMounted) {
            setValue(null);
            timeout2 = setTimeout(
              updateValue,
              Math.random() * randomTriggerMinMaxDifference + randomTriggerMin,
            );
          }
        }, keepEventAliveTime);
      }
    };

    updateValue();

    return () => {
      isMounted = false;
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return value;
};

export default useRandomValues;
