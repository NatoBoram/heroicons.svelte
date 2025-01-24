<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookOpenSvelte from '../../../lib/16/solid/book-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BookOpenSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="BookOpen" />
