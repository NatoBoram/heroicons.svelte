<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongLeftSvelte from '../../../lib/16/solid/arrow-long-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowLongLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLongLeft" />
