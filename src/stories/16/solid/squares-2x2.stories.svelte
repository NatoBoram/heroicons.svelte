<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Squares2x2Svelte from '../../../lib/16/solid/squares-2x2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Squares2x2Svelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Squares2x2" />
