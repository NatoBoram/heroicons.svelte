<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongLeftSvelte from '../../../lib/20/solid/arrow-long-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowLongLeftSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowLongLeft" />
