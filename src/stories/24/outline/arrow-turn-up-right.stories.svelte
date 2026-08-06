<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnUpRightSvelte from '../../../lib/24/outline/arrow-turn-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTurnUpRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnUpRight" />
