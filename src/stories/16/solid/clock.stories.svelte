<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClockSvelte from '../../../lib/16/solid/clock.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ClockSvelte,
		args: { class: '' },
	})
</script>

<Story name="Clock" />
