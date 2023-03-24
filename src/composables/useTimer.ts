import { onMounted, ref } from 'vue';
export const useTimer = () => {
	// variables
	const isPlaying = ref(true);
	const interval = ref();
	const time = ref(0);
	const hour = ref(0);
	const minute = ref(0);
	const second = ref(0);

	const play = () => {
		isPlaying.value = !isPlaying.value;
		interval.value = setInterval(countTime, 1000);
	};

	const pause = () => {
		isPlaying.value = !isPlaying.value;
		clearInterval(interval.value);
	};

	const reset = () => {
		isPlaying.value = false;
		clearInterval(interval.value);
		time.value = 0;
		hour.value = 0;
		minute.value = 0;
		second.value = 0;
	};

	const countTime = () => {
		time.value++;
		hour.value = Math.floor(time.value / 3600) % 24;
		minute.value = Math.floor(time.value / 60) % 60;
		second.value = Math.floor(time.value % 60);
	};

	// start timer instantly when timer created
	onMounted(() => {
		interval.value = setInterval(countTime, 1000);
	});

	return {
		isPlaying,
		hour,
		minute,
		second,
		play,
		pause,
		reset,
	};
};
