<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NewspaperSvelte from '../../../lib/24/solid/newspaper.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: NewspaperSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Newspaper" />
