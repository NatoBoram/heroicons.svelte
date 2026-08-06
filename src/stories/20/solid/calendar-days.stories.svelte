<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarDaysSvelte from '../../../lib/20/solid/calendar-days.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CalendarDaysSvelte,
		args: { class: '' },
	})
</script>

<Story name="CalendarDays" />
