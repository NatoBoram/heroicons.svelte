<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnLeftDownSvelte from '../../../lib/16/solid/arrow-turn-left-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTurnLeftDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowTurnLeftDown" />
