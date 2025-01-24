<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallUpSvelte from '../../../lib/16/solid/arrow-small-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowSmallUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowSmallUp" />
