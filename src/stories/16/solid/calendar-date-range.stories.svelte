<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarDateRangeSvelte from '../../../lib/16/solid/calendar-date-range.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CalendarDateRangeSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CalendarDateRange" />
