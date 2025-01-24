<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MusicalNoteSvelte from '../../../lib/20/solid/musical-note.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MusicalNoteSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="MusicalNote" />
