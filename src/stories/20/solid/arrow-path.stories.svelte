<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowPathSvelte from '../../../lib/20/solid/arrow-path.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowPathSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowPath" />
