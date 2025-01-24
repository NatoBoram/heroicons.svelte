<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftOnRectangleSvelte from '../../../lib/24/solid/arrow-left-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowLeftOnRectangleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowLeftOnRectangle" />
