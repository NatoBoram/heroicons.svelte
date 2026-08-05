<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PencilSquareSvelte from '../../../lib/24/outline/pencil-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PencilSquareSvelte,
		args: { class: '' },
	})
</script>

<Story name="PencilSquare" />
