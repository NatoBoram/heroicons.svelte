<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnRightUpSvelte from '../../../lib/24/outline/arrow-turn-right-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTurnRightUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnRightUp" />
