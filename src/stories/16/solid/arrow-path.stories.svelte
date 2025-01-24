<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowPathSvelte from '../../../lib/16/solid/arrow-path.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowPathSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowPath" />
