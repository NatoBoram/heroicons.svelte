<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PencilSvelte from '../../../lib/24/outline/pencil.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PencilSvelte,
		args: { class: '' },
	})
</script>

<Story name="Pencil" />
