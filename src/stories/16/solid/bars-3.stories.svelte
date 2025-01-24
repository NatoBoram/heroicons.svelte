<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3Svelte from '../../../lib/16/solid/bars-3.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Bars3Svelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Bars3" />
