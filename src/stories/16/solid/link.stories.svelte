<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LinkSvelte from '../../../lib/16/solid/link.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: LinkSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Link" />
