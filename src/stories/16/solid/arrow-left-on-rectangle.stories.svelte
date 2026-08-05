<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowLeftOnRectangleSvelte from '../../../lib/16/solid/arrow-left-on-rectangle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowLeftOnRectangleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowLeftOnRectangle" />
