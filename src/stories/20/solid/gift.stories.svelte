<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GiftSvelte from '../../../lib/20/solid/gift.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: GiftSvelte,
		args: { class: '' },
	})
</script>

<Story name="Gift" />
