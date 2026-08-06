<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NewspaperSvelte from '../../../lib/16/solid/newspaper.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: NewspaperSvelte,
		args: { class: '' },
	})
</script>

<Story name="Newspaper" />
