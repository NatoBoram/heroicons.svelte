<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TrashSvelte from '../../../lib/24/outline/trash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: TrashSvelte,
		args: { class: '' },
	})
</script>

<Story name="Trash" />
