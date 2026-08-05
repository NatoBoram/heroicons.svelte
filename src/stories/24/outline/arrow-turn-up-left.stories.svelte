<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnUpLeftSvelte from '../../../lib/24/outline/arrow-turn-up-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTurnUpLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnUpLeft" />
