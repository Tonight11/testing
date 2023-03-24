<script setup lang="ts">
	import { useTimer } from '@/composables/useTimer';
	import PlayIcon from './Icon/PlayIcon.vue';
	import PauseIcon from './Icon/PauseIcon.vue';
	import StopIcon from './Icon/StopIcon.vue';

	// geting info from parent
	interface Timer {
		id: symbol;
	}
	defineProps<Timer>();

	const { isPlaying, hour, minute, second, play, pause, reset } = useTimer();

	// utils
	// convert number with one digit to double '2' -> '02'
	const fullFill = (item: number) => {
		if (item < 10) {
			return `0${item}`;
		} else {
			return item;
		}
	};
</script>

<template>
	<div
		class="timer"
		:class="{
			active: isPlaying,
		}"
	>
		<div class="timer__content">
			<div class="timer__hour" v-if="hour">{{ fullFill(hour) }}:</div>
			<div class="timer__minute" v-if="minute">{{ fullFill(minute) }}:</div>
			<div class="timer__sec">
				{{ second ? fullFill(second) : '00' }}
			</div>
		</div>
		<div class="timer__controls">
			<PlayIcon class="timer__control" v-if="!isPlaying" @click="play" />
			<PauseIcon class="timer__control" v-else @click="pause" />
			<StopIcon class="timer__control" @click="reset" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.timer {
		background-color: #696969;
		min-width: 225px;

		&.active {
			.timer__content {
				color: white;
			}
			.timer__control {
				fill: white;
			}
		}

		&__content {
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 400;
			font-size: 22px;

			color: #9e9e9e;
			padding: 20px 0;
			border-bottom: 1px solid #9e9e9e;
		}

		&__controls {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 50px;
			padding: 20px 0;

			& * {
				cursor: pointer;
				fill: #9e9e9e;
			}
		}
	}
</style>
