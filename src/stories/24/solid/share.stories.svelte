<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShareSvelte from '../../../lib/24/solid/share.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ShareSvelte,
		args: { class: '' },
	})
</script>

<Story name="Share" />
