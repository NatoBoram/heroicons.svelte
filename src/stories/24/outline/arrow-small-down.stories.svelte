<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowSmallDownSvelte from '../../../lib/24/outline/arrow-small-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowSmallDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowSmallDown" />
