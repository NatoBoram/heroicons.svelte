<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShareSvelte from '../../../lib/16/solid/share.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ShareSvelte,
		args: { class: '' },
	})
</script>

<Story name="Share" />
