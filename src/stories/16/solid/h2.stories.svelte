<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import H2Svelte from '../../../lib/16/solid/h2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: H2Svelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="H2" />
