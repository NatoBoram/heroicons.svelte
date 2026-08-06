<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars4Svelte from '../../../lib/20/solid/bars-4.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Bars4Svelte,
		args: { class: '' },
	})
</script>

<Story name="Bars4" />
