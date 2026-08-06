<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ScissorsSvelte from '../../../lib/20/solid/scissors.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ScissorsSvelte,
		args: { class: '' },
	})
</script>

<Story name="Scissors" />
