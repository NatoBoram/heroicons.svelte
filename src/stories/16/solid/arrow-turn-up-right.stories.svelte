<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnUpRightSvelte from '../../../lib/16/solid/arrow-turn-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTurnUpRightSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowTurnUpRight" />
