<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnDownLeftSvelte from '../../../lib/20/solid/arrow-turn-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTurnDownLeftSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowTurnDownLeft" />
