<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarDaysSvelte from '../../../lib/16/solid/calendar-days.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CalendarDaysSvelte,
		args: { class: '' },
	})
</script>

<Story name="CalendarDays" />
