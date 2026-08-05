<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnLeftSvelte from '../../../lib/16/solid/arrow-uturn-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUturnLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUturnLeft" />
