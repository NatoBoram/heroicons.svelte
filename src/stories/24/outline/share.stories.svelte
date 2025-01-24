<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShareSvelte from '../../../lib/24/outline/share.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ShareSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Share" />
