<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarDateRangeSvelte from '../../../lib/24/outline/calendar-date-range.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CalendarDateRangeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CalendarDateRange" />
