<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClockSvelte from '../../../lib/24/outline/clock.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ClockSvelte,
		args: { class: '' },
	})
</script>

<Story name="Clock" />
