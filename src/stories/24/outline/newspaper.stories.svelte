<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NewspaperSvelte from '../../../lib/24/outline/newspaper.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: NewspaperSvelte,
		args: { class: '' },
	})
</script>

<Story name="Newspaper" />
