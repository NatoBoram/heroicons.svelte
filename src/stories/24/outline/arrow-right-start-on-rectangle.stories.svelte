<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightStartOnRectangleSvelte from '../../../lib/24/outline/arrow-right-start-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowRightStartOnRectangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowRightStartOnRectangle" />
