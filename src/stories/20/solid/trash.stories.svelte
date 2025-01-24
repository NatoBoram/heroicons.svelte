<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TrashSvelte from '../../../lib/20/solid/trash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: TrashSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Trash" />
