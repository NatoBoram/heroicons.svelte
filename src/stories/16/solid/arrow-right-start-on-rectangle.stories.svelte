<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowRightStartOnRectangleSvelte from '../../../lib/16/solid/arrow-right-start-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowRightStartOnRectangleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowRightStartOnRectangle" />
