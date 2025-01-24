<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3Svelte from '../../../lib/20/solid/bars-3.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Bars3Svelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Bars3" />
