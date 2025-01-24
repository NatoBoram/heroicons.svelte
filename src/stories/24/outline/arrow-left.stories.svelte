<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftSvelte from '../../../lib/24/outline/arrow-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowLeft" />
