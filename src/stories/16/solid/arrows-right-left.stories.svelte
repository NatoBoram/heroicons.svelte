<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsRightLeftSvelte from '../../../lib/16/solid/arrows-right-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowsRightLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowsRightLeft" />
