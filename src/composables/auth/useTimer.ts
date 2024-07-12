import { reactive, computed, onUnmounted } from "vue";

interface TimerState {
  timer: number;
  errorPass: string | null;
  otp: string | null;
  registerloader: boolean;
  showResendButton: boolean;
  intervalId: number | null;
}

export function useTimer() {
  const state = reactive<TimerState>({
    timer: 10,
    errorPass: null,
    otp: null,
    registerloader: false,
    showResendButton: false,
    intervalId: null,
  });

  const formattedTimer = computed(() => {
    return formatTime(state.timer);
  });

  function resetTimer(event: Event): void {
    event.preventDefault();
    state.timer = 120;
    state.showResendButton = false;
    if (state.timer > 0) {
      startTimer();
    }
  }

  function startTimer(): void {
    if (state.intervalId !== null) {
      clearInterval(state.intervalId);
    }
    state.intervalId = window.setInterval(() => {
      if (state.timer > 0) {
        state.timer--;
      } else {
        state.showResendButton = true;
        if (state.intervalId !== null) {
          clearInterval(state.intervalId);
        }
      }
    }, 1000);
  }

  function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  onUnmounted(() => {
    if (state.intervalId !== null) {
      clearInterval(state.intervalId);
    }
  });

  return {
    ...state,
    formattedTimer,
    resetTimer,
    startTimer,
  };
}
