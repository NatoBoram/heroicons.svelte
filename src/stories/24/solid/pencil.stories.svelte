<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PencilSvelte from '../../../lib/24/solid/pencil.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PencilSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Pencil" />
