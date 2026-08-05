<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookOpenSvelte from '../../../lib/20/solid/book-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BookOpenSvelte,
		args: { class: '' },
	})
</script>

<Story name="BookOpen" />
