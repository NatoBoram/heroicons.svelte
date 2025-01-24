<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnLeftUpSvelte from '../../../lib/16/solid/arrow-turn-left-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTurnLeftUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowTurnLeftUp" />
