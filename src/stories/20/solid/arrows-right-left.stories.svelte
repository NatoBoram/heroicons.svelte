<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowsRightLeftSvelte from '../../../lib/20/solid/arrows-right-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowsRightLeftSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowsRightLeft" />
