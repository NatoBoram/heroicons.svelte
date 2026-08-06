<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarDaysSvelte from '../../../lib/24/solid/calendar-days.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CalendarDaysSvelte,
		args: { class: '' },
	})
</script>

<Story name="CalendarDays" />
