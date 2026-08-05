<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TrashSvelte from '../../../lib/20/solid/trash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: TrashSvelte,
		args: { class: '' },
	})
</script>

<Story name="Trash" />
