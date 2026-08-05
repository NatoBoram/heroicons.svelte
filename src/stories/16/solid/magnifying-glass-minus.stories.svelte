<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassMinusSvelte from '../../../lib/16/solid/magnifying-glass-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MagnifyingGlassMinusSvelte,
		args: { class: '' },
	})
</script>

<Story name="MagnifyingGlassMinus" />
