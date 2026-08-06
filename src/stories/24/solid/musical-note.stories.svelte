<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MusicalNoteSvelte from '../../../lib/24/solid/musical-note.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MusicalNoteSvelte,
		args: { class: '' },
	})
</script>

<Story name="MusicalNote" />
