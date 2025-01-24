<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarDateRangeSvelte from '../../../lib/20/solid/calendar-date-range.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CalendarDateRangeSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CalendarDateRange" />
