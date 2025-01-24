<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnUpLeftSvelte from '../../../lib/24/solid/arrow-turn-up-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowTurnUpLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowTurnUpLeft" />
