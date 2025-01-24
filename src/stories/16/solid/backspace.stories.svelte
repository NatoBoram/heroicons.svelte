<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BackspaceSvelte from '../../../lib/16/solid/backspace.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BackspaceSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Backspace" />
