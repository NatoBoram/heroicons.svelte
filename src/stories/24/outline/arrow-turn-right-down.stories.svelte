<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnRightDownSvelte from '../../../lib/24/outline/arrow-turn-right-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTurnRightDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowTurnRightDown" />
