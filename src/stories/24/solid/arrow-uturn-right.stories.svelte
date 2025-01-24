<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnRightSvelte from '../../../lib/24/solid/arrow-uturn-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowUturnRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUturnRight" />
