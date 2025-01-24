<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ScissorsSvelte from '../../../lib/20/solid/scissors.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ScissorsSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Scissors" />
