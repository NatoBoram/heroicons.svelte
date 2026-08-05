<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BackspaceSvelte from '../../../lib/24/solid/backspace.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BackspaceSvelte,
		args: { class: '' },
	})
</script>

<Story name="Backspace" />
