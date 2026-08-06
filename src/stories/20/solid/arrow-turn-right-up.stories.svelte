<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnRightUpSvelte from '../../../lib/20/solid/arrow-turn-right-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTurnRightUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnRightUp" />
