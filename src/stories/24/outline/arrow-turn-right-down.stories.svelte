<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnRightDownSvelte from '../../../lib/24/outline/arrow-turn-right-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTurnRightDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnRightDown" />
