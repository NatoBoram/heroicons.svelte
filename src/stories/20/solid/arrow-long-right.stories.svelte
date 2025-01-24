<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongRightSvelte from '../../../lib/20/solid/arrow-long-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowLongRightSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowLongRight" />
