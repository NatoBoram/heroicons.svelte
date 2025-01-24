<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnRightUpSvelte from '../../../lib/16/solid/arrow-turn-right-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTurnRightUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowTurnRightUp" />
