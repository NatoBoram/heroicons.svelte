<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClockSvelte from '../../../lib/16/solid/clock.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ClockSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Clock" />
