<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightOnRectangleSvelte from '../../../lib/24/solid/arrow-right-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowRightOnRectangleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowRightOnRectangle" />
