<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import H3Svelte from '../../../lib/20/solid/h3.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: H3Svelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="H3" />
