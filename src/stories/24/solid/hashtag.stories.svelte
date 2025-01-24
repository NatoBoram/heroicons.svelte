<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HashtagSvelte from '../../../lib/24/solid/hashtag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: HashtagSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Hashtag" />
