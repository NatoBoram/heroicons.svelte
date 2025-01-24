<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallUpSvelte from '../../../lib/24/outline/arrow-small-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowSmallUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowSmallUp" />
