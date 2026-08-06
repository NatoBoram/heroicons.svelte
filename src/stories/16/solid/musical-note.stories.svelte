<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MusicalNoteSvelte from '../../../lib/16/solid/musical-note.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MusicalNoteSvelte,
		args: { class: '' },
	})
</script>

<Story name="MusicalNote" />
