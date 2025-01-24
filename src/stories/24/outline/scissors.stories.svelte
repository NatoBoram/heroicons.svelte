<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ScissorsSvelte from '../../../lib/24/outline/scissors.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ScissorsSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Scissors" />
