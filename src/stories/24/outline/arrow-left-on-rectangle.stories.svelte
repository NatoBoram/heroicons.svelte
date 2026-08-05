<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftOnRectangleSvelte from '../../../lib/24/outline/arrow-left-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLeftOnRectangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLeftOnRectangle" />
