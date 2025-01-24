<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PencilSvelte from '../../../lib/16/solid/pencil.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PencilSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Pencil" />
