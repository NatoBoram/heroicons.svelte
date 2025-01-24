<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MusicalNoteSvelte from '../../../lib/24/solid/musical-note.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MusicalNoteSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MusicalNote" />
