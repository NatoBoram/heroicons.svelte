<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftOnRectangleSvelte from '../../../lib/16/solid/arrow-left-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowLeftOnRectangleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowLeftOnRectangle" />
