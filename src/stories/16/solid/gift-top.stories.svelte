<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GiftTopSvelte from '../../../lib/16/solid/gift-top.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: GiftTopSvelte,
		args: { class: '' },
	})
</script>

<Story name="GiftTop" />
