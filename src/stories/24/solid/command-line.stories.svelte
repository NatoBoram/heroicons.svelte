<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CommandLineSvelte from '../../../lib/24/solid/command-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CommandLineSvelte,
		args: { class: '' },
	})
</script>

<Story name="CommandLine" />
