<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LinkSvelte from '../../../lib/24/outline/link.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: LinkSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Link" />
