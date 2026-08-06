<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ScissorsSvelte from '../../../lib/24/outline/scissors.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ScissorsSvelte,
		args: { class: '' },
	})
</script>

<Story name="Scissors" />
