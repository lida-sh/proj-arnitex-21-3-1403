export function useCountdownTimer(initialTime: number) {
  const time: Ref<number> = ref(initialTime);
  const isRunning: Ref<boolean> = ref(false);
  let intervalId: NodeJS.Timeout | null = null;

  const start = (): void => {
    if (!isRunning.value && time.value > 0) {
      isRunning.value = true;
      intervalId = setInterval(() => {
        if (time.value > 0) {
          time.value--;
        } else {
          stop();
        }
      }, 1000);
    }
  };

  const stop = (): void => {
    if (isRunning.value && intervalId !== null) {
      clearInterval(intervalId);
      isRunning.value = false;
      intervalId = null;
    }
  };

  const reset = (): void => {
    stop();
    time.value = initialTime;
  };

  onUnmounted(() => {
    stop();
  });

  return {
    time,
    isRunning,
    start,
    stop,
    reset,
  };
}
