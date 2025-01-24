<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarSvelte from '../../../lib/20/solid/calendar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CalendarSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Calendar" />
