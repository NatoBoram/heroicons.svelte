<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpLeftSvelte from '../../../lib/20/solid/arrow-up-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUpLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUpLeft" />
