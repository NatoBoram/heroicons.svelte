<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HashtagSvelte from '../../../lib/20/solid/hashtag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: HashtagSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Hashtag" />
