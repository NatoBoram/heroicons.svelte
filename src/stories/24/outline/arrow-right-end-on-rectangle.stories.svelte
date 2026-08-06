<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightEndOnRectangleSvelte from '../../../lib/24/outline/arrow-right-end-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowRightEndOnRectangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowRightEndOnRectangle" />
