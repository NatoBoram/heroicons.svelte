<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import HashtagSvelte from '../../../lib/20/solid/hashtag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: HashtagSvelte,
		args: { class: '' },
	})
</script>

<Story name="Hashtag" />
