<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Bars3Svelte from '../../../lib/24/outline/bars-3.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: Bars3Svelte,
		args: { class: '' },
	})
</script>

<Story name="Bars3" />
