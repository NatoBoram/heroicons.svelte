<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnUpLeftSvelte from '../../../lib/16/solid/arrow-turn-up-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTurnUpLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnUpLeft" />
