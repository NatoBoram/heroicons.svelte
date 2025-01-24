<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PencilSquareSvelte from '../../../lib/24/solid/pencil-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PencilSquareSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PencilSquare" />
