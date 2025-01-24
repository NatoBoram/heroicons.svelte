<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ScissorsSvelte from '../../../lib/24/solid/scissors.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ScissorsSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Scissors" />
