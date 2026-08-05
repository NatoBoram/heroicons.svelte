<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnDownRightSvelte from '../../../lib/20/solid/arrow-turn-down-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTurnDownRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnDownRight" />
