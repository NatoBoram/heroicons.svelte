<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnLeftDownSvelte from '../../../lib/20/solid/arrow-turn-left-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTurnLeftDownSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowTurnLeftDown" />
