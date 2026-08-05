<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnDownLeftSvelte from '../../../lib/24/outline/arrow-turn-down-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTurnDownLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnDownLeft" />
