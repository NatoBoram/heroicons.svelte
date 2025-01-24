<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClockSvelte from '../../../lib/24/solid/clock.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ClockSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Clock" />
