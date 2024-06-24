export default {
    data() {
        return {
            timer: 10,
            errorPass: null,
            otp: null,
            registerloader: false
        };
    },
    computed: {
        formattedTimer() {
            return this.formatTime(this.timer);
        },
 
    },
    methods: {
        resetTimer(event) {
            event.preventDefault();
            this.timer = 120;
            this.showResendButton = false;
            if (this.timer > 0) {
                this.startTimer();
            }
        },
        startTimer() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
            this.intervalId = setInterval(() => {
                if (this.timer > 0) {
                    this.timer--;
                } else {
                    this.showResendButton = true;
                    clearInterval(this.intervalId);
                }
            }, 1000);
        },
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const formattedSeconds =
                remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
            return `${formattedMinutes}:${formattedSeconds}`;
        },
    },
};