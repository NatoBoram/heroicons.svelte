<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarSvelte from '../../../lib/16/solid/calendar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CalendarSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Calendar" />
