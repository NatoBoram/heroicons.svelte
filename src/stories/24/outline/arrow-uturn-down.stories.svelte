<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnDownSvelte from '../../../lib/24/outline/arrow-uturn-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowUturnDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUturnDown" />
