<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarDaysSvelte from '../../../lib/24/solid/calendar-days.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CalendarDaysSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CalendarDays" />
