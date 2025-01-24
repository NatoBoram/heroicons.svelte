<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnDownRightSvelte from '../../../lib/24/solid/arrow-turn-down-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowTurnDownRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowTurnDownRight" />
