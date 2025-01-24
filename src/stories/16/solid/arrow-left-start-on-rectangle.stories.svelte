<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftStartOnRectangleSvelte from '../../../lib/16/solid/arrow-left-start-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowLeftStartOnRectangleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowLeftStartOnRectangle" />
