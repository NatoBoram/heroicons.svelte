<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnDownLeftSvelte from '../../../lib/16/solid/arrow-turn-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTurnDownLeftSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowTurnDownLeft" />
