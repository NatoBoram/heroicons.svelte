<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnLeftDownSvelte from '../../../lib/24/solid/arrow-turn-left-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowTurnLeftDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowTurnLeftDown" />
