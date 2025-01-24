<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NewspaperSvelte from '../../../lib/16/solid/newspaper.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: NewspaperSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Newspaper" />
