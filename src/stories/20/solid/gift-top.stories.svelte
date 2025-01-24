<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GiftTopSvelte from '../../../lib/20/solid/gift-top.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: GiftTopSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="GiftTop" />
