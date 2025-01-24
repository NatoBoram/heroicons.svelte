<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnDownRightSvelte from '../../../lib/16/solid/arrow-turn-down-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTurnDownRightSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowTurnDownRight" />
