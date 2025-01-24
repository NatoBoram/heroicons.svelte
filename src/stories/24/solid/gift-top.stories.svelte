<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GiftTopSvelte from '../../../lib/24/solid/gift-top.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: GiftTopSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="GiftTop" />
