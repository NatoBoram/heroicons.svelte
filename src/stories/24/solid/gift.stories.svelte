<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GiftSvelte from '../../../lib/24/solid/gift.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: GiftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Gift" />
