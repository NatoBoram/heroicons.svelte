<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import H2Svelte from '../../../lib/20/solid/h2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: H2Svelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="H2" />
