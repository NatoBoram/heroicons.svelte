<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowPathSvelte from '../../../lib/24/solid/arrow-path.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowPathSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowPath" />
