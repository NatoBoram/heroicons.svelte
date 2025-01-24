<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnDownLeftSvelte from '../../../lib/24/solid/arrow-turn-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowTurnDownLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowTurnDownLeft" />
