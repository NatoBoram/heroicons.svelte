<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CalendarSvelte from '../../../lib/24/outline/calendar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CalendarSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Calendar" />
