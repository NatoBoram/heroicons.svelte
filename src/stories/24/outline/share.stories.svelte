<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShareSvelte from '../../../lib/24/outline/share.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ShareSvelte,
		args: { class: '' },
	})
</script>

<Story name="Share" />
