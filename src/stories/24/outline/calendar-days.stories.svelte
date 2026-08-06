<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarDaysSvelte from '../../../lib/24/outline/calendar-days.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CalendarDaysSvelte,
		args: { class: '' },
	})
</script>

<Story name="CalendarDays" />
