<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftEndOnRectangleSvelte from '../../../lib/24/outline/arrow-left-end-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLeftEndOnRectangleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowLeftEndOnRectangle" />
