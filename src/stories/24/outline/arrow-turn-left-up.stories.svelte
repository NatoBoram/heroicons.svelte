<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTurnLeftUpSvelte from '../../../lib/24/outline/arrow-turn-left-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTurnLeftUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowTurnLeftUp" />
