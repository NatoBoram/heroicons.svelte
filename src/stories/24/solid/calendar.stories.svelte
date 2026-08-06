<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarSvelte from '../../../lib/24/solid/calendar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CalendarSvelte,
		args: { class: '' },
	})
</script>

<Story name="Calendar" />
