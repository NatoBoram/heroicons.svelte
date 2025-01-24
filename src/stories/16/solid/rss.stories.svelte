<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RssSvelte from '../../../lib/16/solid/rss.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: RssSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Rss" />
