<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TrashSvelte from '../../../lib/24/solid/trash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: TrashSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Trash" />
