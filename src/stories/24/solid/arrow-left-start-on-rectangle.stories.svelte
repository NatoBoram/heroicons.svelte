<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftStartOnRectangleSvelte from '../../../lib/24/solid/arrow-left-start-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowLeftStartOnRectangleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowLeftStartOnRectangle" />
