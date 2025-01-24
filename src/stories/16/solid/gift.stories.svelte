<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GiftSvelte from '../../../lib/16/solid/gift.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: GiftSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Gift" />
