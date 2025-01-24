<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Squares2x2Svelte from '../../../lib/20/solid/squares-2x2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Squares2x2Svelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Squares2x2" />
