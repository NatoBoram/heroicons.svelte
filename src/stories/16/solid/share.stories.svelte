<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShareSvelte from '../../../lib/16/solid/share.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ShareSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Share" />
