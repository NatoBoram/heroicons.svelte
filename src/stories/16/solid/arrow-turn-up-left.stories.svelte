<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnUpLeftSvelte from '../../../lib/16/solid/arrow-turn-up-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTurnUpLeftSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowTurnUpLeft" />
