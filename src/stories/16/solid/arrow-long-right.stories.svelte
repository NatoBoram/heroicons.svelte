<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLongRightSvelte from '../../../lib/16/solid/arrow-long-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowLongRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLongRight" />
