<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnUpRightSvelte from '../../../lib/24/solid/arrow-turn-up-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowTurnUpRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnUpRight" />
