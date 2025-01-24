<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftOnRectangleSvelte from '../../../lib/24/outline/arrow-left-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLeftOnRectangleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowLeftOnRectangle" />
