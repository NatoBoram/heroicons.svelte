<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftEndOnRectangleSvelte from '../../../lib/24/outline/arrow-left-end-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLeftEndOnRectangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLeftEndOnRectangle" />
