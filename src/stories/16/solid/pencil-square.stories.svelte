<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PencilSquareSvelte from '../../../lib/16/solid/pencil-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PencilSquareSvelte,
		args: { class: '' },
	})
</script>

<Story name="PencilSquare" />
