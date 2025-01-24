<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RssSvelte from '../../../lib/20/solid/rss.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: RssSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Rss" />
