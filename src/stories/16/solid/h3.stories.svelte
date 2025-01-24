<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import H3Svelte from '../../../lib/16/solid/h3.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: H3Svelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="H3" />
