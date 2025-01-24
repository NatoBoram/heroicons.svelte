<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowPathSvelte from '../../../lib/24/outline/arrow-path.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowPathSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowPath" />
