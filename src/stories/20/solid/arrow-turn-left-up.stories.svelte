<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnLeftUpSvelte from '../../../lib/20/solid/arrow-turn-left-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTurnLeftUpSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowTurnLeftUp" />
