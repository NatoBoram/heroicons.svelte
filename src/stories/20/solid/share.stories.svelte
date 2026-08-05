<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShareSvelte from '../../../lib/20/solid/share.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ShareSvelte,
		args: { class: '' },
	})
</script>

<Story name="Share" />
