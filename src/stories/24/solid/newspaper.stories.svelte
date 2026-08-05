<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NewspaperSvelte from '../../../lib/24/solid/newspaper.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: NewspaperSvelte,
		args: { class: '' },
	})
</script>

<Story name="Newspaper" />
