<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnLeftDownSvelte from '../../../lib/24/outline/arrow-turn-left-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTurnLeftDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTurnLeftDown" />
