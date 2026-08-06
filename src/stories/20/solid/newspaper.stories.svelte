<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NewspaperSvelte from '../../../lib/20/solid/newspaper.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: NewspaperSvelte,
		args: { class: '' },
	})
</script>

<Story name="Newspaper" />
