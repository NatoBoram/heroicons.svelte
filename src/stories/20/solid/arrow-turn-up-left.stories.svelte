<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnUpLeftSvelte from '../../../lib/20/solid/arrow-turn-up-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTurnUpLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnUpLeft" />
