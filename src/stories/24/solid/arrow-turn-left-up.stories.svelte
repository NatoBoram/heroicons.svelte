<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnLeftUpSvelte from '../../../lib/24/solid/arrow-turn-left-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowTurnLeftUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnLeftUp" />
