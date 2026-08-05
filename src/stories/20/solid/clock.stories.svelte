<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClockSvelte from '../../../lib/20/solid/clock.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ClockSvelte,
		args: { class: '' },
	})
</script>

<Story name="Clock" />
