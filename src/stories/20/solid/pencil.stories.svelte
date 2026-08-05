<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PencilSvelte from '../../../lib/20/solid/pencil.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PencilSvelte,
		args: { class: '' },
	})
</script>

<Story name="Pencil" />
