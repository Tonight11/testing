<script setup lang="ts">
	import { ref } from 'vue';
	import Timer from '@/components/Timer.vue';

	// static first timer
	const timers = ref([
		{
			id: Symbol(new Date().toDateString()),
		},
	]);

	// adding new timer
	const addNewTimer = () => {
		timers.value.push({
			id: Symbol(new Date().toDateString()),
		});
	};
</script>

<template>
	<div class="timer-container">
		<TransitionGroup name="list">
			<Timer v-for="timer in timers" :key="timer.id" :id="timer.id" />
		</TransitionGroup>

		<div class="add-timer" @click="addNewTimer">+</div>
	</div>
</template>

<style scoped>
	.timer-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 50px;
	}
	.add-timer {
		cursor: pointer;
		min-width: 225px;

		background: #696969;
		padding: 30px 0;
		font-size: 40px;
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}
</style>
