<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars2Svelte from '../../../lib/20/solid/bars-2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Bars2Svelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Bars2" />
