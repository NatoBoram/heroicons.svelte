<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnUpRightSvelte from '../../../lib/24/outline/arrow-turn-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTurnUpRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowTurnUpRight" />
