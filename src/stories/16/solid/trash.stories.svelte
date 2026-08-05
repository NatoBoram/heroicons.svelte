<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TrashSvelte from '../../../lib/16/solid/trash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: TrashSvelte,
		args: { class: '' },
	})
</script>

<Story name="Trash" />
