<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongLeftSvelte from '../../../lib/24/solid/arrow-long-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowLongLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLongLeft" />
