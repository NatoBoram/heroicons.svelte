<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnUpRightSvelte from '../../../lib/20/solid/arrow-turn-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTurnUpRightSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowTurnUpRight" />
