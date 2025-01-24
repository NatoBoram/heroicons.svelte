<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnRightSvelte from '../../../lib/20/solid/arrow-uturn-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUturnRightSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowUturnRight" />
