<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ScissorsSvelte from '../../../lib/16/solid/scissors.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ScissorsSvelte,
		args: { class: '' },
	})
</script>

<Story name="Scissors" />
