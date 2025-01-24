<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnRightSvelte from '../../../lib/16/solid/arrow-uturn-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUturnRightSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowUturnRight" />
