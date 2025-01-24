<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarDateRangeSvelte from '../../../lib/24/solid/calendar-date-range.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CalendarDateRangeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CalendarDateRange" />
