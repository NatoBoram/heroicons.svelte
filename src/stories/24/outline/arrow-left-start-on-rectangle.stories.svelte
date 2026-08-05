<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftStartOnRectangleSvelte from '../../../lib/24/outline/arrow-left-start-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowLeftStartOnRectangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLeftStartOnRectangle" />
