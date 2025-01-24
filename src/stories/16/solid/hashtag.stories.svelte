<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HashtagSvelte from '../../../lib/16/solid/hashtag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: HashtagSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Hashtag" />
