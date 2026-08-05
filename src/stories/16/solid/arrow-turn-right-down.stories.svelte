<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnRightDownSvelte from '../../../lib/16/solid/arrow-turn-right-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTurnRightDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnRightDown" />
