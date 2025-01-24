<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnRightUpSvelte from '../../../lib/20/solid/arrow-turn-right-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTurnRightUpSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowTurnRightUp" />
