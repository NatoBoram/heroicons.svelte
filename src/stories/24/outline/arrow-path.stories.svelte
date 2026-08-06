<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowPathSvelte from '../../../lib/24/outline/arrow-path.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowPathSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowPath" />
