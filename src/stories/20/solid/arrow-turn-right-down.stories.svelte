<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnRightDownSvelte from '../../../lib/20/solid/arrow-turn-right-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTurnRightDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnRightDown" />
