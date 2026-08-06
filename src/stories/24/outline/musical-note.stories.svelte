<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MusicalNoteSvelte from '../../../lib/24/outline/musical-note.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MusicalNoteSvelte,
		args: { class: '' },
	})
</script>

<Story name="MusicalNote" />
